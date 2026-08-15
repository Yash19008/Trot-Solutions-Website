"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <section className="login-one">
      <div className="container">
        <div className="login-one__form">
          <div className="inner-title text-center">
            <h2>Admin Login</h2>
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group">
                  <div className="input-box">
                    <input
                      type="email"
                      placeholder="Email..."
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="form-group">
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="Password..."
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="form-group">
                  <button
                    className="thm-btn"
                    type="submit"
                    disabled={loading}
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Please wait..." : "Login Here"}
                    <span className="fas fa-arrow-right"></span>
                  </button>
                </div>
              </div>
              <div className="remember-forget">
                <div className="checked-box1">
                  <input type="checkbox" id="saveinfo" defaultChecked />
                  <label htmlFor="saveinfo">
                    <span></span>
                    Remember me
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
