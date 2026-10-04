* {
  box-sizing: border-box;
}

:root {
  --bg: #0c131a;
  --bg-soft: #121c27;
  --bg-alt: #0d1a24;
  --panel: rgba(20, 31, 40, 0.9);
  --panel-strong: #152533;
  --card: #182a36;
  --card-2: #1b2f3d;
  --line: rgba(255, 255, 255, 0.08);
  --line-strong: rgba(255, 255, 255, 0.12);
  --text: #edf4f8;
  --muted: #a3b5c0;
  --gold: #d8b06b;
  --gold-deep: #bb8e48;
  --green: #78d9ae;
  --blue: #74b7ff;
  --red: #f58a8a;
  --warning: #f5bf73;
  --shadow: 0 20px 50px rgba(0, 0, 0, 0.28);
  --radius: 18px;
  --radius-sm: 12px;
  --radius-lg: 26px;
  --container: 1180px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Tajawal", "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top right, rgba(216, 176, 107, 0.12), transparent 20%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-soft) 100%);
  color: var(--text);
  line-height: 1.8;
}

body.light {
  --bg: #eef4f6;
  --bg-soft: #f7f9fa;
  --bg-alt: #edf4f7;
  --panel: rgba(255, 255, 255, 0.75);
  --panel-strong: #ffffff;
  --card: #f7fafb;
  --card-2: #ecf1f4;
  --line: rgba(17, 26, 34, 0.08);
  --line-strong: rgba(17, 26, 34, 0.12);
  --text: #1b2a34;
  --muted: #5a6b74;
  --gold: #b57d2c;
  --gold-deep: #996b1f;
  --green: #1f9f6a;
  --blue: #2a6fd6;
  --red: #d95d5d;
  --warning: #c8902d;
  --shadow: 0 18px 40px rgba(31, 52, 61, 0.12);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.page-shell {
  min-height: 100vh;
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 88px 0;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(14px);
  background: rgba(12, 19, 26, 0.8);
  border-bottom: 1px solid var(--line);
}

body.light .topbar {
  background: rgba(255, 255, 255, 0.75);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 20px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--gold) 0%, #f1d8a0 100%);
  color: #101820;
  font-weight: 900;
  box-shadow: var(--shadow);
}

.brand-text {
  font-weight: 900;
  font-size: 1.5rem;
}

.brand-text span {
  color: var(--gold);
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--muted);
  font-size: 0.95rem;
}

.nav a {
  transition: 0.2s ease;
}

.nav a:hover {
  color: var(--gold);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-btn,
.secondary-btn,
.primary-btn,
.ghost-btn,
.whatsapp-btn,
.quick-actions button,
#sendChat {
  border: none;
  border-radius: 12px;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.icon-btn,
.secondary-btn,
.ghost-btn,
.whatsapp-btn,
.quick-actions button,
#sendChat {
  padding: 10px 16px;
  font-weight: 700;
}

.icon-btn {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  border: 1px solid var(--line);
}

.secondary-btn,
.ghost-btn,
.quick-actions button,
#sendChat {
  color: var(--text);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.primary-btn,
.whatsapp-btn {
  padding: 14px 22px;
  background: linear-gradient(135deg, var(--gold) 0%, #f0d39b 100%);
  color: #10171e;
  font-weight: 800;
  box-shadow: var(--shadow);
}

.ghost-btn {
  background: transparent;
}

.primary-btn:hover,
.secondary-btn:hover,
.ghost-btn:hover,
.icon-btn:hover,
.whatsapp-btn:hover,
.quick-actions button:hover,
#sendChat:hover {
  transform: translateY(-2px);
  filter: brightness(1.04);
}

.hero {
  padding-top: 60px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 32px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(216, 176, 107, 0.09);
  border: 1px solid rgba(216, 176, 107, 0.25);
  color: var(--gold);
  font-weight: 700;
  margin-bottom: 18px;
}

.eyebrow.small {
  font-size: 0.78rem;
  margin-bottom: 10px;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4.3rem);
  line-height: 1.1;
  letter-spacing: -0.05em;
  max-width: 640px;
}

.hero-copy p {
  margin: 18px 0 26px;
  max-width: 580px;
  color: var(--muted);
  font-size: 1.12rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 26px;
}

.stats-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  color: var(--muted);
}

.stats-inline div {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 90px;
}

.stats-inline strong {
  font-size: 1.2rem;
  color: var(--text);
}

.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.hero-panel {
  padding: 24px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--muted);
  margin-bottom: 20px;
}

.live-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(120, 217, 174, 0.1);
  color: var(--green);
  border: 1px solid rgba(120, 217, 174, 0.3);
  font-size: 0.8rem;
}

.live-pill i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--green);
  display: inline-block;
  box-shadow: 0 0 0 5px rgba(120, 217, 174, 0.12);
}

.kpis {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.kpi-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px 14px;
}

.kpi-card small {
  display: block;
  color: var(--muted);
  margin-bottom: 6px;
}

.kpi-card strong {
  font-size: 1.5rem;
  color: var(--gold);
}

.sparkline {
  margin-top: 18px;
  height: 116px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  align-items: end;
  gap: 8px;
  padding: 14px 8px 4px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.015);
}

.sparkline span {
  border-radius: 9px 9px 0 0;
  background: linear-gradient(180deg, #f1d39d 0%, #b57d2c 100%);
  min-height: 12px;
}

.section-head {
  margin-bottom: 28px;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.7rem);
  line-height: 1.2;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.feature-card {
  padding: 26px 22px;
}

.icon-box {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: rgba(216, 176, 107, 0.1);
  border: 1px solid rgba(216, 176, 107, 0.25);
  color: var(--gold);
  font-size: 1.6rem;
  margin-bottom: 16px;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.3rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.feature-tile {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  padding: 22px 20px;
}

.mini-emoji {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(116, 183, 255, 0.08);
  border: 1px solid rgba(116, 183, 255, 0.2);
  font-size: 1.5rem;
}

.feature-tile h4 {
  margin: 0 0 8px;
  font-size: 1.15rem;
}

.feature-tile p {
  margin: 0;
  color: var(--muted);
}

.dashboard {
  padding: 0;
  overflow: hidden;
}

.dashboard-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.01);
}

.status-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(120, 217, 174, 0.12);
  border: 1px solid rgba(120, 217, 174, 0.2);
  color: var(--green);
  font-size: 0.8rem;
  font-weight: 700;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
}

.main-panel,
.side-panel {
  padding: 24px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px 12px;
}

.stat-card small {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
}

.stat-card strong {
  font-size: 1.5rem;
  color: var(--gold);
}

.chart-box {
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 14px 10px 0;
  background: rgba(255, 255, 255, 0.02);
}

.bar-group {
  height: 180px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 10px;
  align-items: end;
}

.bar-group div {
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #f5d69e 0%, #b57d2c 100%);
  min-height: 20px;
}

.side-panel {
  border-right: 0;
  border-left: 1px solid var(--line);
}

.side-panel h4 {
  margin: 0 0 12px;
  font-size: 1.2rem;
}

.side-panel ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
  color: var(--muted);
}

.side-panel li {
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.crm-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
}

.table-box {
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--line);
  text-align: right;
}

th {
  background: rgba(255, 255, 255, 0.02);
  color: var(--muted);
  font-size: 0.78rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.75rem;
  font-weight: 700;
}

.badge.warning {
  background: rgba(245, 191, 115, 0.12);
  color: var(--warning);
  border: 1px solid rgba(245, 191, 115, 0.18);
}

.badge.neutral {
  background: rgba(116, 183, 255, 0.12);
  color: var(--blue);
  border: 1px solid rgba(116, 183, 255, 0.18);
}

.badge.success {
  background: rgba(120, 217, 174, 0.12);
  color: var(--green);
  border: 1px solid rgba(120, 217, 174, 0.2);
}

.badge.danger {
  background: rgba(245, 138, 138, 0.12);
  color: var(--red);
  border: 1px solid rgba(245, 138, 138, 0.2);
}

.crm-side {
  display: grid;
  gap: 18px;
}

.info-box {
  padding: 20px;
}

.info-box h4 {
  margin: 0 0 12px;
  font-size: 1.2rem;
}

.info-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.assistant-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
}

.assistant-panel,
.assistant-actions {
  padding: 18px;
}

.assistant-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.assistant-badge {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), #f1d8a0);
  color: #111;
  font-weight: 900;
}

.assistant-header strong,
.assistant-header small {
  display: block;
}

.assistant-header small {
  color: var(--muted);
}

.chat-box {
  min-height: 260px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px;
}

.msg {
  max-width: 80%;
  padding: 12px 14px;
  border-radius: 16px;
  font-size: 0.95rem;
  line-height: 1.7;
}

.msg-bot {
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  color: var(--text);
}

.msg-user {
  align-self: flex-end;
  background: rgba(216, 176, 107, 0.12);
  border: 1px solid rgba(216, 176, 107, 0.2);
  color: var(--text);
}

.chat-input-row {
  display: flex;
  gap: 10px;
  margin-top: 14px;
}

.chat-input-row input {
  flex: 1;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  color: var(--text);
  padding: 12px 14px;
}

#sendChat {
  padding-inline: 18px;
}

.quick-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;
}

.quick-actions button {
  width: 100%;
  text-align: center;
}

.bot-tips {
  margin-top: 22px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}

.bot-tips h5 {
  margin: 0 0 10px;
  font-size: 1.05rem;
}

.bot-tips ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
}

.contact-form {
  padding: 20px;
}

.field {
  display: grid;
  gap: 8px;
  margin-bottom: 16px;
}

.field label,
.field span {
  color: var(--muted);
  font-size: 0.9rem;
}

.field input,
.field textarea {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-radius: 12px;
  padding: 12px 14px;
}

.field textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-info {
  padding: 20px;
}

.contact-info h4 {
  margin: 0 0 18px;
  font-size: 1.25rem;
}

.contact-info ul {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: grid;
  gap: 12px;
  color: var(--muted);
}

.contact-info li {
  display: grid;
  gap: 4px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
}

.contact-info strong {
  color: var(--text);
}

.footer {
  border-top: 1px solid var(--line);
  color: var(--muted);
  padding: 24px 0 34px;
}

.footer-inner {
  display: flex;
  justify-content: center;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  display: none;
  place-items: center;
  background: rgba(5, 10, 14, 0.7);
  z-index: 40;
  padding: 18px;
}

.modal-overlay.open {
  display: grid;
}

.login-modal {
  width: min(420px, 92vw);
  padding: 24px 22px;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 12px;
  left: 14px;
  background: transparent;
  color: var(--muted);
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
}

.modal-step {
  display: none;
}

.modal-step.active {
  display: block;
}

.login-modal h3 {
  margin: 0 0 8px;
  font-size: 2rem;
}

.login-modal p {
  color: var(--muted);
  margin: 0 0 18px;
}

.login-modal .field {
  margin-bottom: 16px;
}

.login-modal input {
  width: 100%;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-radius: 12px;
  padding: 12px 14px;
}

.full {
  width: 100%;
  margin-top: 10px;
}

.otp-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin: 18px 0 12px;
}

.otp-row input {
  height: 58px;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 800;
}

.success-box {
  display: none;
  margin-top: 14px;
  background: rgba(120, 217, 174, 0.1);
  border: 1px solid rgba(120, 217, 174, 0.2);
  color: var(--green);
  padding: 12px 14px;
  border-radius: 12px;
  font-weight: 700;
}

.success-box.show {
  display: block;
}

@media (max-width: 980px) {
  .hero-grid,
  .dashboard-grid,
  .crm-grid,
  .assistant-layout,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .grid-3,
  .feature-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .nav {
    display: none;
  }

  .stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .quick-actions {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 68px 0;
  }
}
