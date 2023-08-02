import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBlYyRzlYcE3RmDH5-nyzQ0kas9jxygb1w",
  authDomain: "vanlife-react-router-app.firebaseapp.com",
  projectId: "vanlife-react-router-app",
  storageBucket: "vanlife-react-router-app.appspot.com",
  messagingSenderId: "269333953633",
  appId: "1:269333953633:web:db94e397cb6f61b59c3e20",
};

const app = initializeApp(firebaseConfig);

export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
