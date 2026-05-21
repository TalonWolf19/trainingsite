"""
Backend API tests for Forge Athletics
Covers: root, consultation (POST/GET, validation), newsletter (POST, duplicate, validation)
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://coach-elite-training.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root_returns_forge_message(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "Forge" in data.get("message", "")


# ---------- Consultation ----------
class TestConsultation:
    def test_create_consultation_success_and_persist(self, client):
        payload = {
            "name": "TEST_Athlete",
            "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
            "phone": "5551234567",
            "goal": "athletic-performance",
            "mode": "online",
            "message": "Looking to improve sprint speed",
        }
        r = client.post(f"{API}/consultation", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert data["email"] == payload["email"]
        assert data["goal"] == payload["goal"]
        assert data["mode"] == payload["mode"]

        # Verify persistence via GET
        list_r = client.get(f"{API}/consultation")
        assert list_r.status_code == 200
        rows = list_r.json()
        assert any(row["id"] == data["id"] for row in rows), "Created consultation not found in GET"
        # No _id exposed
        for row in rows:
            assert "_id" not in row

    def test_create_consultation_minimal_no_message(self, client):
        payload = {
            "name": "TEST_NoMsg",
            "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
            "phone": "5551112222",
            "goal": "strength-power",
            "mode": "in-person",
        }
        r = client.post(f"{API}/consultation", json=payload)
        assert r.status_code == 200, r.text

    def test_create_consultation_invalid_email(self, client):
        payload = {
            "name": "TEST_Bad",
            "email": "not-an-email",
            "phone": "5551112222",
            "goal": "athletic-performance",
            "mode": "online",
        }
        r = client.post(f"{API}/consultation", json=payload)
        assert r.status_code == 422

    def test_create_consultation_invalid_goal_enum(self, client):
        payload = {
            "name": "TEST_BadGoal",
            "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
            "phone": "5551112222",
            "goal": "world-domination",
            "mode": "online",
        }
        r = client.post(f"{API}/consultation", json=payload)
        assert r.status_code == 422

    def test_create_consultation_invalid_mode_enum(self, client):
        payload = {
            "name": "TEST_BadMode",
            "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
            "phone": "5551112222",
            "goal": "athletic-performance",
            "mode": "telepathic",
        }
        r = client.post(f"{API}/consultation", json=payload)
        assert r.status_code == 422

    def test_list_consultations_no_objectid(self, client):
        r = client.get(f"{API}/consultation")
        assert r.status_code == 200
        rows = r.json()
        assert isinstance(rows, list)
        for row in rows:
            assert "_id" not in row


# ---------- Newsletter ----------
class TestNewsletter:
    def test_subscribe_success(self, client):
        email = f"test_{uuid.uuid4().hex[:10]}@example.com"
        r = client.post(f"{API}/newsletter", json={"email": email})
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["email"] == email
        assert "id" in data and len(data["id"]) > 0
        assert "created_at" in data

    def test_subscribe_duplicate_returns_409(self, client):
        email = f"test_{uuid.uuid4().hex[:10]}@example.com"
        r1 = client.post(f"{API}/newsletter", json={"email": email})
        assert r1.status_code == 200, r1.text
        r2 = client.post(f"{API}/newsletter", json={"email": email})
        assert r2.status_code == 409, r2.text

    def test_subscribe_invalid_email_returns_422(self, client):
        r = client.post(f"{API}/newsletter", json={"email": "not-an-email"})
        assert r.status_code == 422
