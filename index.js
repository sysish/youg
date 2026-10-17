// mhrv-x4g/src/admin.js
function getAdminHTML() {
  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>X4G Admin Panel</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.19.0/dist/tabler-icons.min.css">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#060f1d;--card:rgba(10,22,40,0.95);--accent:#3B82F6;--accent2:#60A5FA;
  --green:#10B981;--red:#EF4444;--amber:#F59E0B;--purple:#8B5CF6;
  --text:#E8F4FF;--dim:#3D6B8E;--mid:#7BAED4;--border:rgba(59,130,246,0.2);
}
body{font-family:'Vazirmatn',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;padding:20px}
.bg{position:fixed;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(59,130,246,0.08),transparent 70%);z-index:0;pointer-events:none}
.wrap{position:relative;z-index:1;max-width:1000px;margin:0 auto}
.header{display:flex;align-items:center;gap:14px;margin-bottom:28px;padding:20px;background:var(--card);border:1px solid var(--border);border-radius:18px}
.header-icon{width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,var(--accent),var(--purple));display:flex;align-items:center;justify-content:center;font-size:22px;color:#fff}
.header-text h1{font-size:20px;font-weight:800}
.header-text p{font-size:12px;color:var(--dim);margin-top:3px}
.card{background:var(--card);border:1px solid var(--border);border-radius:18px;padding:22px;margin-bottom:18px}
.card-title{font-size:15px;font-weight:700;margin-bottom:16px;display:flex;align-items:center;gap:8px;color:var(--accent2)}
.card-title i{font-size:18px}
.field{margin-bottom:14px}
.field label{display:block;font-size:11px;font-weight:700;color:var(--mid);margin-bottom:7px;text-transform:uppercase;letter-spacing:.05em}
input[type=text],input[type=password],textarea,select{width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--border);background:rgba(0,0,0,.3);color:var(--text);font-family:inherit;font-size:13px;outline:none;transition:.15s}
input:focus,textarea:focus,select:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(59,130,246,.1)}
textarea{min-height:90px;resize:vertical;font-family:ui-monospace,monospace;font-size:11px}
.btn{padding:11px 22px;border-radius:10px;border:none;cursor:pointer;font-family:inherit;font-size:13px;font-weight:700;display:inline-flex;align-items:center;gap:7px;transition:.15s}
.btn:hover{transform:translateY(-1px)}
.btn-primary{background:linear-gradient(135deg,var(--accent),var(--purple));color:#fff;box-shadow:0 4px 16px rgba(59,130,246,.3)}
.btn-danger{background:rgba(239,68,68,.15);color:#F87171;border:1px solid rgba(239,68,68,.3)}
.btn-danger:hover{background:rgba(239,68,68,.25)}
.btn-success{background:rgba(16,185,129,.15);color:#34D399;border:1px solid rgba(16,185,129,.3)}
.btn-warn{background:rgba(245,158,11,.15);color:#FCD34D;border:1px solid rgba(245,158,11,.3)}
.btn-sm{padding:7px 13px;font-size:11px}
.result-box{background:rgba(0,0,0,.3);border:1px solid var(--border);border-radius:10px;padding:14px;margin-top:12px;font-family:ui-monospace,monospace;font-size:11px;word-break:break-all;line-height:1.8;color:var(--accent2);max-height:200px;overflow-y:auto}
.sub-item{background:rgba(59,130,246,.06);border:1px solid var(--border);border-radius:12px;padding:14px;margin-bottom:10px;display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.sub-item-info{flex:1;min-width:200px}
.sub-item-name{font-weight:700;font-size:13px;margin-bottom:4px}
.sub-item-url{font-family:ui-monospace,monospace;font-size:10px;color:var(--accent2);word-break:break-all}
.sub-item-meta{font-size:10px;color:var(--dim);margin-top:4px}
.badge{display:inline-block;padding:3px 9px;border-radius:20px;font-size:10px;font-weight:700}
.badge-green{background:rgba(16,185,129,.15);color:#34D399}
.badge-blue{background:rgba(59,130,246,.15);color:var(--accent2)}
.badge-amber{background:rgba(245,158,11,.15);color:#FCD34D}
.badge-red{background:rgba(239,68,68,.15);color:#F87171}
.port-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:8px;margin-top:8px}
.port-chip{padding:8px 12px;border-radius:8px;background:rgba(0,0,0,.3);border:1px solid var(--border);text-align:center;font-size:12px;font-weight:700;cursor:pointer;transition:.15s;font-family:ui-monospace,monospace}
.port-chip:hover{border-color:var(--accent)}
.port-chip.active{background:var(--accent);color:#fff;border-color:var(--accent)}
.empty{text-align:center;padding:30px;color:var(--dim);font-size:13px}
.toast{position:fixed;bottom:22px;left:50%;transform:translateX(-50%) translateY(40px);background:var(--card);border:1px solid var(--border);padding:12px 22px;border-radius:12px;font-size:13px;font-weight:700;opacity:0;transition:.25s;z-index:999}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.toast.ok{border-color:rgba(16,185,129,.4);color:#34D399}
.toast.err{border-color:rgba(239,68,68,.4);color:#F87171}
.login-box{max-width:380px;margin:80px auto;background:var(--card);border:1px solid var(--border);border-radius:22px;padding:36px 30px}
.login-box h2{font-size:20px;font-weight:800;margin-bottom:6px}
.login-box p{font-size:12px;color:var(--dim);margin-bottom:24px}
.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.info-item{background:rgba(0,0,0,.2);border:1px solid var(--border);border-radius:10px;padding:12px}
.info-label{font-size:10px;color:var(--dim);font-weight:700;text-transform:uppercase;margin-bottom:5px}
.info-value{font-size:12px;font-weight:700;word-break:break-all;color:var(--text)}
.error-list{background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:10px;padding:12px;margin-top:10px;color:#F87171;font-size:12px}
.error-list ul{margin-right:16px;margin-top:6px}
.error-list li{margin-bottom:3px}
.confirm-box{margin-top:14px;padding:16px;background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.25);border-radius:12px}
.confirm-box h3{font-size:14px;color:#34D399;margin-bottom:12px;display:flex;align-items:center;gap:6px}
.confirm-actions{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}
.saved-box{margin-top:14px;padding:16px;background:rgba(59,130,246,.08);border:1px solid var(--border);border-radius:12px}
.saved-box h3{font-size:14px;color:var(--accent2);margin-bottom:12px;display:flex;align-items:center;gap:6px}
.saved-actions{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
.highlight-box{margin-top:12px;padding:12px 14px;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.25);border-radius:10px;font-size:11px;color:#FCD34D;display:flex;gap:8px;align-items:flex-start;line-height:1.7}
.highlight-box i{font-size:15px;flex-shrink:0;margin-top:1px}
.cache-bar{display:flex;align-items:center;justify-content:space-between;background:rgba(59,130,246,.08);border:1px solid var(--border);border-radius:10px;padding:10px 14px;margin-bottom:14px;font-size:11.5px;flex-wrap:wrap;gap:8px}
.cache-bar-info{color:var(--mid);display:flex;align-items:center;gap:7px}
.cache-bar-info i{color:var(--accent)}
</style>
</head>
<body>
<div class="bg"></div>
<div class="toast" id="toast"></div>
<div class="wrap" id="app"></div>

<script>
let savedConfig = null;
let pendingConfig = null;
let whiteIps = [];
let selectedPorts = [80, 8080, 8880, 2052, 2082, 2086, 2095];
let minConfigs = 1;
let configNamePrefix = 'X4G';
let subsList = [];
let isLoggedIn = false;
let cacheInfo = null;
let directUuid = '';
let directPath = '/direct';
let proxyIP = '';

const ALL_NO_TLS_PORTS = [80, 8080, 8880, 2052, 2082, 2086, 2095, 81, 82, 83, 84, 85, 8081, 8082, 8083, 8084, 8085, 8881, 8882, 8883, 8884, 8885, 8886, 8887, 8888, 8889, 8890];

function toast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  setTimeout(() => t.classList.remove('show'), 2500);
}

function renderLogin() {
  document.getElementById('app').innerHTML = \`
    <div class="login-box">
      <div style="text-align:center;margin-bottom:20px">
        <div style="width:56px;height:56px;border-radius:16px;background:linear-gradient(135deg,#3B82F6,#8B5CF6);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:24px;color:#fff">
          <i class="ti ti-shield-lock"></i>
        </div>
      </div>
      <h2>\u0648\u0631\u0648\u062F \u0628\u0647 \u067E\u0646\u0644 \u0627\u062F\u0645\u06CC\u0646</h2>
      <p>\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F</p>
      <div class="field">
        <input type="password" id="admin-pass" placeholder="\u0631\u0645\u0632 \u0639\u0628\u0648\u0631" onkeydown="if(event.key==='Enter')doLogin()">
      </div>
      <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="doLogin()">
        <i class="ti ti-login-2"></i> \u0648\u0631\u0648\u062F
      </button>
    </div>
  \`;
}

function adminFetch(url, opts) {
  opts = opts || {};
  const headers = Object.assign({}, opts.headers || {}, { 'x-admin-pass': sessionStorage.getItem('x4g_admin_pass') || '' });
  return fetch(url, Object.assign({}, opts, { headers: headers })).then(function (r) {
    if (r.status === 401) { sessionStorage.removeItem('x4g_admin_pass'); isLoggedIn = false; renderLogin(); }
    return r;
  });
}

async function doLogin() {
  const pass = document.getElementById('admin-pass').value;
  try {
    const r = await adminFetch('/admin/api/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ p: pass }),
    });
    if (r.ok) {
      isLoggedIn = true;
      sessionStorage.setItem('x4g_admin_pass', pass);
      sessionStorage.setItem('x4g_admin', '1');
      renderPanel();
    } else {
      toast('\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u0634\u062A\u0628\u0627\u0647 \u0627\u0633\u062A', 'err');
    }
  } catch (e) {
    toast('\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u0634\u062A\u0628\u0627\u0647 \u0627\u0633\u062A', 'err');
  }
}

async function loadData(forceRefresh = false) {
  try {
    const url = '/admin/api/data' + (forceRefresh ? '?refresh=1' : '');
    const r = await adminFetch(url);
    const d = await r.json();
    if (d.success) {
      whiteIps = d.whiteIps || [];
      selectedPorts = d.selectedPorts || [80, 8080, 8880, 2052, 2082, 2086, 2095];
      minConfigs = d.minConfigs || 1;
      configNamePrefix = d.configNamePrefix || 'X4G';
      subsList = d.subs || [];
      savedConfig = d.config || null;
      directUuid = d.directUuid || '';
      directPath = d.directPath || '/direct';
      proxyIP = d.proxyIP || '';
      cacheInfo = d.cacheInfo || null;
    }
  } catch(e) {}
}

async function saveData() {
  try {
    const r = await adminFetch('/admin/api/data', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        whiteIps,
        selectedPorts,
        minConfigs,
        configNamePrefix,
        config: savedConfig,
        directUuid,
        directPath,
        proxyIP,
      })
    });
    const d = await r.json();
    if (!d.success) toast('\u062E\u0637\u0627 \u062F\u0631 \u0630\u062E\u06CC\u0631\u0647', 'err');
  } catch(e) {
    toast('\u062E\u0637\u0627 \u062F\u0631 \u0630\u062E\u06CC\u0631\u0647: ' + e.message, 'err');
  }
}

async function refreshCache() {
  try {
    const r = await adminFetch('/admin/api/refresh-cache', { method: 'POST' });
    const d = await r.json();
    if (d.success) {
      toast('\u06A9\u0634 \u0631\u06CC\u0641\u0631\u0634 \u0634\u062F', 'ok');
      await loadData(true);
      renderPanel();
    }
  } catch(e) {
    toast('\u062E\u0637\u0627 \u062F\u0631 \u0631\u06CC\u0641\u0631\u0634 \u06A9\u0634', 'err');
  }
}

function renderPanel() {
  document.getElementById('app').innerHTML = \`
    <div class="header">
      <div class="header-icon"><i class="ti ti-settings"></i></div>
      <div class="header-text" style="flex:1">
        <h1>X4G Admin Panel</h1>
        <p>\u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0627\u0646\u0641\u06CC\u06AF\u060C IP \u0633\u0641\u06CC\u062F\u060C \u067E\u0648\u0631\u062A\u200C\u0647\u0627 \u0648 \u0633\u0627\u0628 \u0627\u0634\u062A\u0631\u0627\u06A9</p>
      </div>
      <button class="btn btn-danger btn-sm" onclick="doLogout()"><i class="ti ti-logout"></i> \u062E\u0631\u0648\u062C</button>
    </div>

    <div class="cache-bar">
      <div class="cache-bar-info">
        <i class="ti ti-bolt"></i>
        <span>\u06A9\u0634 \u062D\u0627\u0641\u0638\u0647\u200C\u0627\u06CC \u06F3\u06F0 \u062F\u0642\u06CC\u0642\u0647\u200C\u0627\u06CC \u0641\u0639\u0627\u0644 \u0627\u0633\u062A \u2014 \u0645\u0635\u0631\u0641 KV \u0628\u0647 \u062D\u062F\u0627\u0642\u0644 \u0631\u0633\u06CC\u062F\u0647</span>
      </div>
      <button class="btn btn-warn btn-sm" onclick="refreshCache()"><i class="ti ti-refresh"></i> \u0631\u06CC\u0641\u0631\u0634 \u06A9\u0634</button>
    </div>

    <div class="card">
      <div class="card-title"><i class="ti ti-link"></i> \u06A9\u0627\u062F\u0631 \u06F1: \u06A9\u0627\u0646\u0641\u06CC\u06AF \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F\u0647 \u0627\u0632 Railway (\u062D\u0627\u0644\u062A \u063A\u06CC\u0631\u0645\u0633\u062A\u0642\u06CC\u0645)</div>
      <div class="field">
        <label>\u06A9\u0627\u0646\u0641\u06CC\u06AF VLESS (\u0627\u0632 \u067E\u0646\u0644 Railway \u06A9\u067E\u06CC \u0648 \u067E\u06CC\u0633\u062A \u06A9\u0646)</label>
        <textarea id="config-input" placeholder="vless://..."></textarea>
      </div>
      <button class="btn btn-primary" onclick="parseConfig()"><i class="ti ti-search"></i> \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0627\u0637\u0644\u0627\u0639\u0627\u062A</button>
      <button class="btn btn-danger" style="margin-right:8px" onclick="clearInput()"><i class="ti ti-eraser"></i> \u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 \u06A9\u0627\u062F\u0631</button>
      <div id="config-info"></div>
    </div>

    <div class="card">
      <div class="card-title"><i class="ti ti-world"></i> \u06A9\u0627\u062F\u0631 \u06F2: IP \u0633\u0641\u06CC\u062F \u0648 \u067E\u0648\u0631\u062A\u200C\u0647\u0627</div>
      <div class="field">
        <label>\u0622\u06CC\u200C\u067E\u06CC\u200C\u0647\u0627\u06CC \u0633\u0641\u06CC\u062F (\u0647\u0631 \u062E\u0637 \u06CC\u06A9 IP)</label>
        <textarea id="ips-input" placeholder="172.67.154.194&#10;104.16.0.0&#10;104.17.0.0">\${whiteIps.join('\\n')}</textarea>
      </div>
      <div class="field">
        <label>\u067E\u0648\u0631\u062A\u200C\u0647\u0627\u06CC \u0628\u062F\u0648\u0646 TLS (\u0631\u0648\u06CC \u0647\u0631\u06A9\u062F\u0648\u0645 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646)</label>
        <div class="port-grid" id="port-grid"></div>
      </div>
      <div class="field">
        <label>\u062D\u062F\u0627\u0642\u0644 \u062A\u0639\u062F\u0627\u062F \u06A9\u0627\u0646\u0641\u06CC\u06AF \u062F\u0631 \u0647\u0631 \u0633\u0627\u0628</label>
        <input type="text" id="min-configs" value="\${minConfigs}" placeholder="1">
      </div>
      <div class="field">
        <label>\u067E\u06CC\u0634\u0648\u0646\u062F \u0646\u0627\u0645 \u06A9\u0627\u0646\u0641\u06CC\u06AF\u200C\u0647\u0627 (\u062F\u0627\u062E\u0644 \u06A9\u0644\u0627\u06CC\u0646\u062A \u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u062F\u0647 \u0645\u06CC\u0634\u0647)</label>
        <input type="text" id="config-name-prefix" value="\${configNamePrefix}" placeholder="X4G">
        <div class="highlight-box" style="margin-top:8px">
          <i class="ti ti-info-circle"></i>
          <span>\u0627\u06CC\u0646 \u0646\u0627\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u067E\u06CC\u0634\u0648\u0646\u062F \u06A9\u0627\u0646\u0641\u06CC\u06AF\u200C\u0647\u0627\u06CC \u0633\u0627\u062E\u062A\u0647\u200C\u0634\u062F\u0647 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u0634\u0647. \u0645\u062B\u0644\u0627\u064B \u0627\u06AF\u0647 <b>X4G</b> \u0628\u0630\u0627\u0631\u06CC\u060C \u06A9\u0627\u0646\u0641\u06CC\u06AF\u200C\u0647\u0627 \u0628\u0647 \u0635\u0648\u0631\u062A <b>X4G-1</b>\u060C <b>X4G-2</b> \u0648... \u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u062F\u0647 \u0645\u06CC\u0634\u0646.</span>
        </div>
      </div>
      <div class="field" style="margin-top:6px;padding-top:16px;border-top:1px solid var(--border)">
        <label>\u26A1 \u062D\u0627\u0644\u062A \u0645\u0633\u062A\u0642\u06CC\u0645 \u2014 UUID</label>
        <div style="display:flex;gap:8px">
          <input type="text" id="direct-uuid" value="\${directUuid}" placeholder="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx" style="flex:1">
          <button class="btn btn-warn btn-sm" onclick="genDirectUuid()"><i class="ti ti-dice"></i> \u062A\u0648\u0644\u06CC\u062F</button>
        </div>
      </div>
      <div class="field">
        <label>\u062D\u0627\u0644\u062A \u0645\u0633\u062A\u0642\u06CC\u0645 \u2014 \u0645\u0633\u06CC\u0631 WebSocket</label>
        <input type="text" id="direct-path" value="\${directPath}" placeholder="/direct">
      </div>
      <div class="field">
        <label>\u062D\u0627\u0644\u062A \u0645\u0633\u062A\u0642\u06CC\u0645 \u2014 Proxy IP (\u0627\u062E\u062A\u06CC\u0627\u0631\u06CC)</label>
        <input type="text" id="proxy-ip" value="\${proxyIP}" placeholder="\u0645\u062B\u0644\u0627\u064B 1.2.3.4 \u06CC\u0627 host.example.com:443">
        <div class="highlight-box" style="margin-top:8px">
          <i class="ti ti-info-circle"></i>
          <span>\u0648\u0631\u06A9\u0631 \u0646\u0645\u06CC\u200C\u062A\u0648\u0646\u0647 \u0645\u0633\u062A\u0642\u06CC\u0645 \u0628\u0647 \u0633\u0627\u06CC\u062A\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u067E\u0634\u062A \u062E\u0648\u062F Cloudflare \u0647\u0633\u062A\u0646 \u0648\u0635\u0644 \u0628\u0634\u0647. \u0627\u06AF\u0647 \u0627\u062A\u0635\u0627\u0644 \u0645\u0633\u062A\u0642\u06CC\u0645 \u062E\u0627\u0644\u06CC \u0628\u0631\u06AF\u0634\u062A\u060C \u0628\u0627 \u0627\u06CC\u0646 \u0622\u06CC\u200C\u067E\u06CC \u062F\u0648\u0628\u0627\u0631\u0647 \u062A\u0644\u0627\u0634 \u0645\u06CC\u06A9\u0646\u0647. \u062E\u0627\u0644\u06CC \u0628\u0630\u0627\u0631\u06CC \u0641\u0642\u0637 \u062A\u0644\u0627\u0634 \u0645\u0633\u062A\u0642\u06CC\u0645 \u0627\u0646\u062C\u0627\u0645 \u0645\u06CC\u0634\u0647.</span>
        </div>
      </div>
      <button class="btn btn-primary" onclick="saveSettings()"><i class="ti ti-device-floppy"></i> \u0630\u062E\u06CC\u0631\u0647 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A</button>
    </div>

    <div class="card">
      <div class="card-title"><i class="ti ti-plus"></i> \u06A9\u0627\u062F\u0631 \u06F3: \u0627\u06CC\u062C\u0627\u062F \u0633\u0627\u0628 \u0627\u0634\u062A\u0631\u0627\u06A9</div>
      <div class="field">
        <label>\u0646\u0648\u0639 \u0627\u062A\u0635\u0627\u0644</label>
        <select id="sub-type">
          <option value="indirect">\u063A\u06CC\u0631\u0645\u0633\u062A\u0642\u06CC\u0645 \u2014 Cloudflare \u2190 \u0633\u0627\u06CC\u062A Railway</option>
          <option value="direct">\u0645\u0633\u062A\u0642\u06CC\u0645 \u2014 Cloudflare \u2190 \u0645\u0642\u0635\u062F</option>
        </select>
      </div>
      <div class="field">
        <label>\u0646\u0627\u0645 \u0633\u0627\u0628</label>
        <input type="text" id="sub-name" placeholder="\u0645\u062B\u0644\u0627\u064B: \u06A9\u0627\u0631\u0628\u0631 \u0639\u0644\u06CC">
      </div>
      <div class="field">
        <label>\u062A\u0639\u062F\u0627\u062F \u06A9\u0627\u0646\u0641\u06CC\u06AF (\u067E\u0648\u0631\u062A \u0631\u0646\u062F\u0645)</label>
        <input type="text" id="sub-count" value="\${minConfigs}" placeholder="1">
      </div>
      <button class="btn btn-success" onclick="createSub()"><i class="ti ti-link-plus"></i> \u0627\u06CC\u062C\u0627\u062F \u0633\u0627\u0628 \u0627\u0634\u062A\u0631\u0627\u06A9</button>
      <div id="sub-result"></div>
    </div>

    <div class="card">
      <div class="card-title"><i class="ti ti-list"></i> \u06A9\u0627\u062F\u0631 \u06F4: \u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647</div>
      <div id="subs-list"></div>
    </div>
  \`;
  
  renderPortGrid();
  renderConfigInfo();
  renderSubsList();
}

function renderPortGrid() {
  const grid = document.getElementById('port-grid');
  if (!grid) return;
  grid.innerHTML = ALL_NO_TLS_PORTS.map(p => 
    \`<div class="port-chip \${selectedPorts.includes(p) ? 'active' : ''}" onclick="togglePort(\${p})">\${p}</div>\`
  ).join('');
}

function togglePort(port) {
  if (selectedPorts.includes(port)) {
    selectedPorts = selectedPorts.filter(p => p !== port);
  } else {
    selectedPorts.push(port);
  }
  renderPortGrid();
}

function parseVlessConfigJS(configStr) {
  const result = {
    uuid: null, host: null, port: null, name: 'X4G',
    type: 'xhttp', mode: 'packet-up', path: '/',
    security: 'tls', sni: '', hostHeader: '',
    fp: 'chrome', alpn: '', raw: '',
    errors: [],
    success: false,
  };

  try {
    if (!configStr) {
      result.errors.push('\u06A9\u0627\u0646\u0641\u06CC\u06AF \u062E\u0627\u0644\u06CC \u0627\u0633\u062A');
      return result;
    }

    let str = String(configStr).trim();

    if (!str.startsWith('vless://')) {
      try {
        const decoded = atob(str);
        if (decoded.startsWith('vless://')) str = decoded;
      } catch(e) {
        result.errors.push('\u062F\u06CC\u06A9\u062F base64 \u0646\u0627\u0645\u0648\u0641\u0642');
      }
    }

    if (!str.startsWith('vless://')) {
      result.errors.push('\u06A9\u0627\u0646\u0641\u06CC\u06AF \u0628\u0627\u06CC\u062F \u0628\u0627 vless:// \u0634\u0631\u0648\u0639 \u0634\u0648\u062F');
      return result;
    }

    result.raw = str;
    let rest = str.slice(8);

    const hashIdx = rest.lastIndexOf('#');
    if (hashIdx !== -1) {
      let nameRaw = rest.slice(hashIdx + 1);
      try { result.name = decodeURIComponent(nameRaw); }
      catch(e) { result.name = nameRaw; }
      rest = rest.slice(0, hashIdx);
    }

    let queryStr = '';
    const qIdx = rest.indexOf('?');
    if (qIdx !== -1) {
      queryStr = rest.slice(qIdx + 1);
      rest = rest.slice(0, qIdx);
    }

    const params = {};
    if (queryStr) {
      queryStr.split('&').forEach(pair => {
        const eqIdx = pair.indexOf('=');
        if (eqIdx === -1) {
          params[pair] = '';
        } else {
          const k = pair.slice(0, eqIdx);
          const v = pair.slice(eqIdx + 1);
          try { params[decodeURIComponent(k)] = decodeURIComponent(v); }
          catch(e) { params[k] = v; }
        }
      });
    }

    const atIdx = rest.lastIndexOf('@');
    if (atIdx === -1) {
      result.errors.push('\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 @ \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F');
      return result;
    }

    result.uuid = rest.slice(0, atIdx);
    let hostPort = rest.slice(atIdx + 1);

    if (hostPort.includes('/')) {
      hostPort = hostPort.split('/')[0];
    }

    if (hostPort.startsWith('[')) {
      const bracketEnd = hostPort.indexOf(']');
      result.host = hostPort.slice(1, bracketEnd);
      result.port = parseInt(hostPort.slice(bracketEnd + 2)) || 443;
    } else {
      const colonIdx = hostPort.lastIndexOf(':');
      if (colonIdx === -1) {
        result.host = hostPort;
        result.port = 443;
      } else {
        result.host = hostPort.slice(0, colonIdx);
        result.port = parseInt(hostPort.slice(colonIdx + 1)) || 443;
      }
    }

    result.type = params.type || 'xhttp';
    result.mode = params.mode || 'packet-up';
    result.path = params.path || '/';
    result.security = params.security || 'tls';
    result.sni = params.sni || result.host;
    result.hostHeader = params.host || result.host;
    result.fp = params.fp || 'chrome';
    result.alpn = params.alpn || '';

    if (!result.uuid || !result.host || !result.port) {
      result.errors.push('UUID / HOST / PORT \u0646\u0627\u0642\u0635 \u0627\u0633\u062A');
      return result;
    }

    result.success = true;
    return result;
  } catch(e) {
    result.errors.push('\u062E\u0637\u0627\u06CC \u063A\u06CC\u0631\u0645\u0646\u062A\u0638\u0631\u0647: ' + e.message);
    return result;
  }
}

function parseConfig() {
  const str = document.getElementById('config-input').value.trim();
  if (!str) { toast('\u06A9\u0627\u0646\u0641\u06CC\u06AF \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646', 'err'); return; }
  
  const parsed = parseVlessConfigJS(str);
  
  if (!parsed.success) {
    document.getElementById('config-info').innerHTML = \`
      <div class="error-list">
        <strong><i class="ti ti-alert-circle"></i> \u062E\u0637\u0627 \u062F\u0631 \u067E\u0627\u0631\u0633 \u06A9\u0627\u0646\u0641\u06CC\u06AF:</strong>
        <ul>
          \${parsed.errors.map(e => '<li>' + e + '</li>').join('')}
        </ul>
      </div>
    \`;
    toast('\u067E\u0627\u0631\u0633 \u0646\u0627\u0645\u0648\u0641\u0642', 'err');
    return;
  }
  
  pendingConfig = parsed;
  renderConfigPreview();
  toast('\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0634\u062F \u2014 \u062A\u0627\u06CC\u06CC\u062F \u06A9\u0646', 'ok');
}

function renderConfigPreview() {
  const box = document.getElementById('config-info');
  if (!box || !pendingConfig) return;
  
  const p = pendingConfig;
  box.innerHTML = \`
    <div class="confirm-box">
      <h3><i class="ti ti-circle-check"></i> \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0634\u062F\u0647 \u2014 \u062A\u0627\u06CC\u06CC\u062F \u06A9\u0646</h3>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">UUID</div>
          <div class="info-value">\${p.uuid}</div>
        </div>
        <div class="info-item">
          <div class="info-label">\u0647\u0627\u0633\u062A \u0627\u0635\u0644\u06CC (Railway)</div>
          <div class="info-value">\${p.host}</div>
        </div>
        <div class="info-item">
          <div class="info-label">\u067E\u0648\u0631\u062A \u0627\u0635\u0644\u06CC</div>
          <div class="info-value">\${p.port}</div>
        </div>
        <div class="info-item">
          <div class="info-label">\u0645\u0633\u06CC\u0631 (path)</div>
          <div class="info-value">\${p.path}</div>
        </div>
        <div class="info-item">
          <div class="info-label">SNI</div>
          <div class="info-value">\${p.sni}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Host Header (Railway)</div>
          <div class="info-value">\${p.hostHeader}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Type</div>
          <div class="info-value">\${p.type}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Mode</div>
          <div class="info-value">\${p.mode}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Security</div>
          <div class="info-value">\${p.security}</div>
        </div>
        <div class="info-item">
          <div class="info-label">\u0646\u0627\u0645 \u06A9\u0627\u0646\u0641\u06CC\u06AF</div>
          <div class="info-value">\${p.name}</div>
        </div>
      </div>
      <div class="highlight-box">
        <i class="ti ti-bulb"></i>
        <span>\u0647\u0627\u0633\u062A \u0627\u0635\u0644\u06CC (Railway) \u0641\u0642\u0637 \u0628\u0631\u0627\u06CC \u0627\u062A\u0635\u0627\u0644 Worker \u0628\u0647 \u0633\u0631\u0648\u0631 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u0634\u0647. \u06A9\u0627\u0646\u0641\u06CC\u06AF\u200C\u0647\u0627\u06CC \u0633\u0627\u062E\u062A\u0647\u200C\u0634\u062F\u0647 \u0628\u0631\u0627\u06CC \u06A9\u0644\u0627\u06CC\u0646\u062A\u060C \u0627\u0632 <b>\u0622\u062F\u0631\u0633 Worker</b> \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 host \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u06A9\u0646\u0646.</span>
      </div>
      <div class="confirm-actions">
        <button class="btn btn-success" onclick="confirmConfig()"><i class="ti ti-check"></i> \u062A\u0627\u06CC\u06CC\u062F \u0648 \u0630\u062E\u06CC\u0631\u0647</button>
        <button class="btn btn-warn" onclick="cancelConfig()"><i class="ti ti-x"></i> \u0627\u0646\u0635\u0631\u0627\u0641</button>
      </div>
    </div>
  \`;
}

async function confirmConfig() {
  savedConfig = pendingConfig;
  pendingConfig = null;
  document.getElementById('config-input').value = '';
  await saveData();
  await adminFetch('/admin/api/refresh-cache', { method: 'POST' }).catch(()=>{});
  renderConfigInfo();
  toast('\u0630\u062E\u06CC\u0631\u0647 \u0634\u062F', 'ok');
}

function cancelConfig() {
  pendingConfig = null;
  renderConfigInfo();
  toast('\u0644\u063A\u0648 \u0634\u062F', '');
}

function renderConfigInfo() {
  const box = document.getElementById('config-info');
  if (!box) return;
  
  if (pendingConfig) {
    renderConfigPreview();
    return;
  }
  
  if (savedConfig) {
    const p = savedConfig;
    box.innerHTML = \`
      <div class="saved-box">
        <h3><i class="ti ti-database"></i> \u06A9\u0627\u0646\u0641\u06CC\u06AF \u0630\u062E\u06CC\u0631\u0647\u200C\u0634\u062F\u0647</h3>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">UUID</div>
            <div class="info-value">\${p.uuid}</div>
          </div>
          <div class="info-item">
            <div class="info-label">\u0647\u0627\u0633\u062A \u0627\u0635\u0644\u06CC (Railway)</div>
            <div class="info-value">\${p.host}</div>
          </div>
          <div class="info-item">
            <div class="info-label">\u067E\u0648\u0631\u062A</div>
            <div class="info-value">\${p.port}</div>
          </div>
          <div class="info-item">
            <div class="info-label">\u0645\u0633\u06CC\u0631</div>
            <div class="info-value">\${p.path}</div>
          </div>
          <div class="info-item">
            <div class="info-label">SNI</div>
            <div class="info-value">\${p.sni}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Host Header</div>
            <div class="info-value">\${p.hostHeader}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Type / Mode</div>
            <div class="info-value">\${p.type} / \${p.mode}</div>
          </div>
          <div class="info-item">
            <div class="info-label">\u0646\u0627\u0645</div>
            <div class="info-value">\${p.name}</div>
          </div>
        </div>
        <div class="saved-actions">
          <button class="btn btn-danger" onclick="deleteSavedConfig()"><i class="ti ti-trash"></i> \u062D\u0630\u0641 \u06A9\u0627\u0646\u0641\u06CC\u06AF \u0630\u062E\u06CC\u0631\u0647\u200C\u0634\u062F\u0647</button>
        </div>
      </div>
    \`;
    return;
  }
  
  box.innerHTML = '<div class="empty">\u0647\u0646\u0648\u0632 \u06A9\u0627\u0646\u0641\u06CC\u06AF\u06CC \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0648 \u0630\u062E\u06CC\u0631\u0647 \u0646\u0634\u062F\u0647</div>';
}

async function deleteSavedConfig() {
  if (!confirm('\u06A9\u0627\u0646\u0641\u06CC\u06AF \u0630\u062E\u06CC\u0631\u0647\u200C\u0634\u062F\u0647 \u062D\u0630\u0641 \u0634\u0648\u062F\u061F')) return;
  savedConfig = null;
  await saveData();
  await adminFetch('/admin/api/refresh-cache', { method: 'POST' }).catch(()=>{});
  renderConfigInfo();
  toast('\u06A9\u0627\u0646\u0641\u06CC\u06AF \u062D\u0630\u0641 \u0634\u062F', 'ok');
}

function clearInput() {
  document.getElementById('config-input').value = '';
  pendingConfig = null;
  renderConfigInfo();
  toast('\u06A9\u0627\u062F\u0631 \u067E\u0627\u06A9 \u0634\u062F', 'ok');
}

async function saveSettings() {
  whiteIps = document.getElementById('ips-input').value
    .split('\\n').map(s => s.trim()).filter(Boolean);
  minConfigs = parseInt(document.getElementById('min-configs').value) || 1;
  configNamePrefix = document.getElementById('config-name-prefix').value.trim() || 'X4G';
  const newUuid = document.getElementById('direct-uuid').value.trim().toLowerCase();
  if (newUuid && !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(newUuid)) {
    toast('UUID \u062D\u0627\u0644\u062A \u0645\u0633\u062A\u0642\u06CC\u0645 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A', 'err');
    return;
  }
  directUuid = newUuid;
  directPath = document.getElementById('direct-path').value.trim() || '/direct';
  if (!directPath.startsWith('/')) directPath = '/' + directPath;
  proxyIP = document.getElementById('proxy-ip').value.trim();
  await saveData();
  await adminFetch('/admin/api/refresh-cache', { method: 'POST' }).catch(()=>{});
  toast('\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F', 'ok');
}

async function createSub() {
  const connType = document.getElementById('sub-type').value;
  if (connType === 'indirect' && !savedConfig) { toast('\u0627\u0648\u0644 \u06A9\u0627\u0646\u0641\u06CC\u06AF \u0631\u0648 \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0648 \u062A\u0627\u06CC\u06CC\u062F \u06A9\u0646', 'err'); return; }
  if (connType === 'direct' && !directUuid) { toast('\u0627\u0648\u0644 UUID \u062D\u0627\u0644\u062A \u0645\u0633\u062A\u0642\u06CC\u0645 \u0631\u0648 \u0628\u0633\u0627\u0632 \u0648 \u0630\u062E\u06CC\u0631\u0647 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0628\u0632\u0646', 'err'); return; }
  if (whiteIps.length === 0) { toast('\u062D\u062F\u0627\u0642\u0644 \u06CC\u0647 IP \u0633\u0641\u06CC\u062F \u0648\u0627\u0631\u062F \u06A9\u0646', 'err'); return; }
  if (selectedPorts.length === 0) { toast('\u062D\u062F\u0627\u0642\u0644 \u06CC\u0647 \u067E\u0648\u0631\u062A \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646', 'err'); return; }
  
  const name = document.getElementById('sub-name').value.trim() || 'X4G';
  const count = parseInt(document.getElementById('sub-count').value) || minConfigs;
  
  try {
    const r = await adminFetch('/admin/api/create-sub', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
        count,
        config: connType === 'indirect' ? savedConfig : null,
        connType,
        whiteIps,
        ports: selectedPorts,
        configNamePrefix,
      })
    });
    const d = await r.json();
    if (d.success) {
      document.getElementById('sub-result').innerHTML = \`
        <div style="margin-top:14px;padding:14px;background:rgba(59,130,246,.08);border:1px solid var(--border);border-radius:12px">
          <div style="font-weight:700;font-size:12px;color:var(--accent2);margin-bottom:8px">
            <i class="ti ti-link"></i> \u0644\u06CC\u0646\u06A9 \u0633\u0627\u0628 \u0633\u0627\u062E\u062A\u0647 \u0634\u062F
          </div>
          <div class="result-box" id="new-sub-url">\${d.subUrl}</div>
          <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
            <button class="btn btn-primary btn-sm" onclick="copyText('\${d.subUrl}')"><i class="ti ti-copy"></i> \u06A9\u067E\u06CC</button>
            <button class="btn btn-success btn-sm" onclick="window.open('\${d.subUrl}','_blank')"><i class="ti ti-external-link"></i> \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646</button>
            <button class="btn btn-primary btn-sm" onclick="showQR('\${d.subUrl}')"><i class="ti ti-qrcode"></i> QR</button>
          </div>
        </div>
      \`;
      toast('\u0633\u0627\u0628 \u0633\u0627\u062E\u062A\u0647 \u0634\u062F', 'ok');
      loadSubsList();
    } else {
      toast(d.error || '\u062E\u0637\u0627', 'err');
    }
  } catch(e) {
    toast('\u062E\u0637\u0627 \u062F\u0631 \u0627\u0631\u062A\u0628\u0627\u0637: ' + e.message, 'err');
  }
}

function genDirectUuid() {
  document.getElementById('direct-uuid').value = crypto.randomUUID();
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => toast('\u06A9\u067E\u06CC \u0634\u062F', 'ok'));
}

function showQR(url) {
  const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent(url);
  window.open(qrUrl, '_blank');
}

async function loadSubsList() {
  try {
    const r = await adminFetch('/admin/api/subs');
    const d = await r.json();
    if (d.success) {
      subsList = d.subs || [];
      renderSubsList();
    }
  } catch(e) {}
}

function renderSubsList() {
  const box = document.getElementById('subs-list');
  if (!box) return;
  
  if (subsList.length === 0) {
    box.innerHTML = '<div class="empty">\u0647\u0646\u0648\u0632 \u0633\u0627\u0628\u06CC \u0633\u0627\u062E\u062A\u0647 \u0646\u0634\u062F\u0647</div>';
    return;
  }
  
  box.innerHTML = subsList.map((s, i) => \`
    <div class="sub-item">
      <div class="sub-item-info">
        <div class="sub-item-name">
          <i class="ti ti-folder" style="color:var(--accent)"></i> \${s.name}
        </div>
        <div class="sub-item-url">\${s.subUrl}</div>
        <div class="sub-item-meta">
          <span class="badge \${s.connType === 'direct' ? 'badge-green' : 'badge-amber'}" style="margin-left:5px">\${s.connType === 'direct' ? '\u0645\u0633\u062A\u0642\u06CC\u0645' : '\u063A\u06CC\u0631\u0645\u0633\u062A\u0642\u06CC\u0645'}</span>
          <span class="badge badge-blue">\${s.configs} \u06A9\u0627\u0646\u0641\u06CC\u06AF</span>
          <span class="badge badge-amber" style="margin-right:5px">\${new Date(s.createdAt).toLocaleString('fa-IR')}</span>
        </div>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn btn-primary btn-sm" onclick="copyText('\${s.subUrl}')"><i class="ti ti-copy"></i></button>
        <button class="btn btn-success btn-sm" onclick="showQR('\${s.subUrl}')"><i class="ti ti-qrcode"></i></button>
        <button class="btn btn-danger btn-sm" onclick="deleteSub('\${s.id}')"><i class="ti ti-trash"></i></button>
      </div>
    </div>
  \`).join('');
}

async function deleteSub(id) {
  if (!confirm('\u062D\u0630\u0641 \u0627\u06CC\u0646 \u0633\u0627\u0628\u061F')) return;
  try {
    const r = await adminFetch('/admin/api/subs/' + id, { method: 'DELETE' });
    const d = await r.json();
    if (d.success) {
      toast('\u062D\u0630\u0641 \u0634\u062F', 'ok');
      await adminFetch('/admin/api/refresh-cache', { method: 'POST' }).catch(()=>{});
      loadSubsList();
    }
  } catch(e) {}
}

function doLogout() {
  isLoggedIn = false;
  sessionStorage.removeItem('x4g_admin');
  sessionStorage.removeItem('x4g_admin_pass');
  renderLogin();
}

(async () => {
  if (sessionStorage.getItem('x4g_admin') === '1' && sessionStorage.getItem('x4g_admin_pass')) {
    isLoggedIn = true;
    await loadData();
    if (isLoggedIn) { renderPanel(); loadSubsList(); }
  } else {
    renderLogin();
  }
})();
</script>
</body>
</html>`;
}

// mhrv-x4g/src/cache.js
var CACHE_TTL_ADMIN = 18e5;
var CACHE_TTL_SUB = 18e5;
var CACHE_TTL_ADMIN_LIST = 18e5;
var CACHE_TTL_MISSING = 18e5;
var cacheAdminData = null;
var cacheAdminDataTime = 0;
var cacheSubs = /* @__PURE__ */ new Map();
var cacheAdminList = null;
var cacheAdminListTime = 0;
var cacheMissingSubs = /* @__PURE__ */ new Map();
function nowMs() {
  return Date.now();
}
async function getAdminData(kv, forceRefresh = false) {
  const now = nowMs();
  if (!forceRefresh && cacheAdminData && now - cacheAdminDataTime < CACHE_TTL_ADMIN) {
    return cacheAdminData;
  }
  try {
    const stored = await kv.get("admin_data");
    cacheAdminData = stored ? JSON.parse(stored) : null;
    cacheAdminDataTime = now;
    return cacheAdminData;
  } catch (e) {
    if (cacheAdminData) return cacheAdminData;
    throw e;
  }
}
async function getSubData(kv, subId, forceRefresh = false) {
  const now = nowMs();
  const missingTime = cacheMissingSubs.get(subId);
  if (!forceRefresh && missingTime && now - missingTime < CACHE_TTL_MISSING) {
    return null;
  }
  const cached = cacheSubs.get(subId);
  if (!forceRefresh && cached && now - cached.time < CACHE_TTL_SUB) {
    return cached.data;
  }
  try {
    const data = await kv.get("sub_" + subId);
    if (!data) {
      cacheMissingSubs.set(subId, now);
      cacheSubs.delete(subId);
      return null;
    }
    const parsed = JSON.parse(data);
    cacheSubs.set(subId, { data: parsed, time: now });
    cacheMissingSubs.delete(subId);
    return parsed;
  } catch (e) {
    if (cached) return cached.data;
    throw e;
  }
}
async function getSubsList(kv, forceRefresh = false) {
  const now = nowMs();
  if (!forceRefresh && cacheAdminList && now - cacheAdminListTime < CACHE_TTL_ADMIN_LIST) {
    return cacheAdminList;
  }
  try {
    const list = await kv.list({ prefix: "sub_" });
    const subs = [];
    for (const key of list.keys) {
      const subId = key.name.replace("sub_", "");
      const data = await getSubData(kv, subId);
      if (data) subs.push(data);
    }
    cacheAdminList = subs.sort((a, b) => b.createdAt - a.createdAt);
    cacheAdminListTime = now;
    return cacheAdminList;
  } catch (e) {
    if (cacheAdminList) return cacheAdminList;
    throw e;
  }
}
function invalidateCache() {
  cacheAdminData = null;
  cacheAdminDataTime = 0;
  cacheSubs.clear();
  cacheMissingSubs.clear();
  cacheAdminList = null;
  cacheAdminListTime = 0;
}
function setAdminDataCache(data) {
  cacheAdminData = data;
  cacheAdminDataTime = nowMs();
}
function clearAdminListCache() {
  cacheAdminList = null;
  cacheAdminListTime = 0;
}

// mhrv-x4g/src/config.js
var KV_NAMESPACE = "opop";

// mhrv-x4g/src/direct.js
import { connect } from "cloudflare:sockets";
function buildDirectConfigs(uuid, wsPath, whiteIps, ports, count, workerHost, namePrefix) {
  const lines = [];
  const prefix = namePrefix || "X4G";
  for (let i = 0; i < count; i++) {
    const ip = whiteIps[Math.floor(Math.random() * whiteIps.length)];
    const port = ports[Math.floor(Math.random() * ports.length)];
    const queryParts = [
      "encryption=none",
      "security=none",
      "type=ws",
      "host=" + encodeURIComponent(workerHost),
      "path=" + encodeURIComponent(wsPath || "/direct")
    ];
    lines.push(`vless://${uuid}@${ip}:${port}?${queryParts.join("&")}#${encodeURIComponent(prefix + "-" + (i + 1))}`);
  }
  return lines;
}
function bytesToUUID(b) {
  const h = [];
  for (let i = 0; i < 16; i++) h.push(b[i].toString(16).padStart(2, "0"));
  const s = h.join("");
  return s.slice(0, 8) + "-" + s.slice(8, 12) + "-" + s.slice(12, 16) + "-" + s.slice(16, 20) + "-" + s.slice(20);
}
function parseVlessHeader(buf, uuid) {
  if (buf.length < 24) return { error: "short" };
  const version = buf[0];
  if (bytesToUUID(buf.subarray(1, 17)) !== uuid) return { error: "bad uuid" };
  const optLen = buf[17];
  const cmdIdx = 18 + optLen;
  const cmd = buf[cmdIdx];
  const portIdx = cmdIdx + 1;
  const port = buf[portIdx] << 8 | buf[portIdx + 1];
  let idx = portIdx + 2;
  const atype = buf[idx++];
  let addr = "", addrLen = 0;
  if (atype === 1) {
    addrLen = 4;
    addr = Array.from(buf.subarray(idx, idx + 4)).join(".");
  } else if (atype === 2) {
    addrLen = buf[idx++];
    addr = new TextDecoder().decode(buf.subarray(idx, idx + addrLen));
  } else if (atype === 3) {
    addrLen = 16;
    const dv = new DataView(buf.buffer, buf.byteOffset + idx, 16);
    const parts = [];
    for (let i = 0; i < 8; i++) parts.push(dv.getUint16(i * 2).toString(16));
    addr = parts.join(":");
  } else {
    return { error: "bad address type" };
  }
  const dataIndex = idx + addrLen;
  if (!addr || dataIndex > buf.length) return { error: "bad header" };
  return { version, cmd, port, addr, dataIndex };
}
function closeWs(ws) {
  try {
    if (ws.readyState === 1 || ws.readyState === 2) ws.close();
  } catch (e) {
  }
}
function makeDnsHandler(ws, respHeader) {
  let header = respHeader;
  let buf = new Uint8Array(0);
  return async (chunk) => {
    const c = new Uint8Array(chunk);
    const m = new Uint8Array(buf.length + c.length);
    m.set(buf);
    m.set(c, buf.length);
    buf = m;
    while (buf.length >= 2) {
      const len = buf[0] << 8 | buf[1];
      if (buf.length < 2 + len) break;
      const q = buf.slice(2, 2 + len);
      buf = buf.slice(2 + len);
      try {
        const r = await fetch("https://1.1.1.1/dns-query", {
          method: "POST",
          headers: { "content-type": "application/dns-message" },
          body: q
        });
        const a = new Uint8Array(await r.arrayBuffer());
        const hLen = header ? header.length : 0;
        const out = new Uint8Array(hLen + 2 + a.length);
        if (header) {
          out.set(header, 0);
          header = null;
        }
        out[hLen] = a.length >> 8 & 255;
        out[hLen + 1] = a.length & 255;
        out.set(a, hLen + 2);
        if (ws.readyState === 1) ws.send(out);
      } catch (e) {
      }
    }
  };
}
function pipeRemote(sock, ws, respHeader, retry) {
  let hasData = false;
  let header = respHeader;
  return sock.readable.pipeTo(new WritableStream({
    write(chunk) {
      hasData = true;
      if (ws.readyState !== 1) throw new Error("ws closed");
      if (header) {
        const out = new Uint8Array(header.length + chunk.byteLength);
        out.set(header, 0);
        out.set(new Uint8Array(chunk), header.length);
        ws.send(out);
        header = null;
      } else {
        ws.send(chunk);
      }
    }
  })).catch(() => {
  }).then(() => {
    if (!hasData && retry) retry();
    else closeWs(ws);
  });
}
function handleDirectWS(cfg) {
  const uuid = String(cfg.directUuid).toLowerCase();
  const proxyIPCfg = String(cfg.proxyIP || "").trim();
  const pair = new WebSocketPair();
  const client = pair[0];
  const ws = pair[1];
  ws.accept();
  const state = { remote: null, writer: null, dns: null, started: false };
  const closeRemote = () => {
    try {
      if (state.writer) state.writer.releaseLock();
    } catch (e) {
    }
    try {
      if (state.remote) state.remote.close();
    } catch (e) {
    }
  };
  async function openRemote(host, port, payload) {
    const sock = connect({ hostname: host, port });
    state.remote = sock;
    state.writer = sock.writable.getWriter();
    if (payload.length) await state.writer.write(payload);
    return sock;
  }
  async function onFirst(data) {
    const buf = new Uint8Array(data);
    const h = parseVlessHeader(buf, uuid);
    if (h.error) {
      closeWs(ws);
      return;
    }
    state.started = true;
    const respHeader = new Uint8Array([h.version, 0]);
    const payload = buf.slice(h.dataIndex);
    if (h.cmd === 2) {
      if (h.port !== 53) {
        closeWs(ws);
        return;
      }
      state.dns = makeDnsHandler(ws, respHeader);
      if (payload.length) await state.dns(payload);
      return;
    }
    if (h.cmd !== 1) {
      closeWs(ws);
      return;
    }
    const retry = proxyIPCfg ? async () => {
      try {
        closeRemote();
        let ph = proxyIPCfg, pp = h.port;
        const ci = proxyIPCfg.lastIndexOf(":");
        if (ci > 0 && proxyIPCfg.indexOf(":") === ci) {
          ph = proxyIPCfg.slice(0, ci);
          pp = parseInt(proxyIPCfg.slice(ci + 1)) || h.port;
        }
        const s2 = await openRemote(ph, pp, payload);
        pipeRemote(s2, ws, respHeader, null);
      } catch (e) {
        closeWs(ws);
      }
    } : null;
    let sock = null;
    try {
      sock = await openRemote(h.addr, h.port, payload);
    } catch (e) {
    }
    if (!sock) {
      if (retry) await retry();
      else closeWs(ws);
      return;
    }
    pipeRemote(sock, ws, respHeader, retry);
  }
  let chain = Promise.resolve();
  ws.addEventListener("message", (ev) => {
    if (typeof ev.data === "string") return;
    chain = chain.then(async () => {
      if (state.dns) return state.dns(ev.data);
      if (state.writer) return state.writer.write(new Uint8Array(ev.data));
      if (!state.started) return onFirst(ev.data);
    }).catch(() => {
      closeRemote();
      closeWs(ws);
    });
  });
  ws.addEventListener("close", closeRemote);
  ws.addEventListener("error", closeRemote);
  return new Response(null, { status: 101, webSocket: client });
}

// mhrv-x4g/src/sub.js
function buildSubConfigs(config, whiteIps, ports, count, workerHost, namePrefix) {
  const lines = [];
  const prefix = namePrefix || "X4G";
  for (let i = 0; i < count; i++) {
    const ip = whiteIps[Math.floor(Math.random() * whiteIps.length)];
    const port = ports[Math.floor(Math.random() * ports.length)];
    const queryParts = [
      "mode=" + encodeURIComponent(config.mode || "packet-up"),
      "path=" + encodeURIComponent(config.path || "/"),
      "security=none",
      "encryption=none",
      "host=" + encodeURIComponent(workerHost),
      "type=" + encodeURIComponent(config.type || "xhttp")
    ];
    const line = `vless://${config.uuid}@${ip}:${port}?${queryParts.join("&")}#${encodeURIComponent(prefix + "-" + (i + 1))}`;
    lines.push(line);
  }
  return lines;
}
async function handleSubPage(subId, env, workerHost) {
  const kv = env[KV_NAMESPACE];
  if (!kv) {
    return new Response("KV not configured", { status: 500 });
  }
  let sub;
  try {
    sub = await getSubData(kv, subId);
  } catch (e) {
    return new Response("KV error: " + e.message, { status: 500 });
  }
  if (!sub) {
    return new Response("Not found", { status: 404 });
  }
  let configs;
  if (sub.connType === "direct") {
    let admin = null;
    try {
      admin = await getAdminData(kv);
    } catch (e) {
      return new Response("KV error: " + e.message, { status: 500 });
    }
    if (!admin || !admin.directUuid) {
      return new Response("Direct mode not configured", { status: 503 });
    }
    configs = buildDirectConfigs(
      admin.directUuid,
      admin.directPath || "/direct",
      sub.whiteIps,
      sub.ports,
      sub.count,
      workerHost,
      sub.configNamePrefix || "X4G"
    );
  } else {
    configs = buildSubConfigs(
      sub.config,
      sub.whiteIps,
      sub.ports,
      sub.count,
      workerHost,
      sub.configNamePrefix || "X4G"
    );
  }
  const content = configs.join("\n");
  let base64Content;
  try {
    base64Content = btoa(unescape(encodeURIComponent(content)));
  } catch (e) {
    base64Content = btoa(content);
  }
  return new Response(base64Content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Profile-Title": encodeURIComponent(sub.name),
      "Profile-Update-Interval": "1",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

// mhrv-x4g/src/utils.js
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}

// mhrv-x4g/src/index.js
async function adminPassOk(given, expected) {
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", enc.encode(given)),
    crypto.subtle.digest("SHA-256", enc.encode(expected))
  ]);
  const x = new Uint8Array(a), y = new Uint8Array(b);
  let d = 0;
  for (let i = 0; i < x.length; i++) d |= x[i] ^ y[i];
  return d === 0;
}
async function handleRequest(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;
  if (path === "/admin" || path === "/admin/") {
    return new Response(getAdminHTML(), {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
  if (path === "/admin/api/login" && request.method === "POST") {
    let body2 = null;
    try {
      body2 = await request.json();
    } catch (_) {
    }
    const ok = !!env.ADMIN_PASSWORD && body2 && typeof body2.p === "string" && await adminPassOk(body2.p, env.ADMIN_PASSWORD);
    return new Response(JSON.stringify({ success: !!ok }), {
      status: ok ? 200 : 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  if (path.startsWith("/admin/api/")) {
    const given = request.headers.get("x-admin-pass") || "";
    const ok = !!env.ADMIN_PASSWORD && await adminPassOk(given, env.ADMIN_PASSWORD);
    if (!ok) {
      return new Response(JSON.stringify({ success: false, error: "unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
  if (path === "/admin/api/refresh-cache" && request.method === "POST") {
    invalidateCache();
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  }
  if (path === "/admin/api/data") {
    const kv = env[KV_NAMESPACE];
    if (request.method === "GET") {
      const forceRefresh = url.searchParams.get("refresh") === "1";
      let data = { whiteIps: [], selectedPorts: [80, 8080], minConfigs: 1, configNamePrefix: "X4G", config: null, directUuid: "", directPath: "/direct", proxyIP: "" };
      if (kv) {
        try {
          const adminData = await getAdminData(kv, forceRefresh);
          if (adminData) data = adminData;
        } catch (e) {
          return new Response(JSON.stringify({
            success: false,
            error: "KV limit: " + e.message,
            whiteIps: [],
            selectedPorts: [],
            minConfigs: 1,
            configNamePrefix: "X4G",
            config: null,
            subs: []
          }), {
            status: 200,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
          });
        }
      }
      let subs = [];
      if (kv) {
        try {
          subs = await getSubsList(kv, forceRefresh);
        } catch (e) {
          subs = cacheAdminList || [];
        }
      }
      return new Response(JSON.stringify({
        success: true,
        whiteIps: data.whiteIps || [],
        selectedPorts: data.selectedPorts || [],
        minConfigs: data.minConfigs || 1,
        configNamePrefix: data.configNamePrefix || "X4G",
        config: data.config || null,
        directUuid: data.directUuid || "",
        directPath: data.directPath || "/direct",
        proxyIP: data.proxyIP || "",
        subs
      }), {
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }
    if (request.method === "POST") {
      try {
        const body2 = await request.json();
        if (kv) {
          await kv.put("admin_data", JSON.stringify({
            whiteIps: body2.whiteIps || [],
            selectedPorts: body2.selectedPorts || [],
            minConfigs: body2.minConfigs || 1,
            configNamePrefix: body2.configNamePrefix || "X4G",
            config: body2.config || null,
            directUuid: body2.directUuid || "",
            directPath: body2.directPath || "/direct",
            proxyIP: body2.proxyIP || ""
          }));
          setAdminDataCache({
            whiteIps: body2.whiteIps || [],
            selectedPorts: body2.selectedPorts || [],
            minConfigs: body2.minConfigs || 1,
            configNamePrefix: body2.configNamePrefix || "X4G",
            config: body2.config || null,
            directUuid: body2.directUuid || "",
            directPath: body2.directPath || "/direct",
            proxyIP: body2.proxyIP || ""
          });
        }
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ success: false, error: e.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
  }
  if (path === "/admin/api/create-sub" && request.method === "POST") {
    try {
      const kv = env[KV_NAMESPACE];
      if (!kv) return new Response(JSON.stringify({ success: false, error: "KV not configured" }), { status: 500 });
      const body2 = await request.json();
      const connType = body2.connType === "direct" ? "direct" : "indirect";
      const jsonErr = (msg) => new Response(JSON.stringify({ success: false, error: msg }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
      if (connType === "indirect" && !body2.config) return jsonErr("\u06A9\u0627\u0646\u0641\u06CC\u06AF Railway \u0630\u062E\u06CC\u0631\u0647 \u0646\u0634\u062F\u0647");
      if (connType === "direct") {
        const ad = await getAdminData(kv).catch(() => null);
        if (!ad || !ad.directUuid) return jsonErr("UUID \u062D\u0627\u0644\u062A \u0645\u0633\u062A\u0642\u06CC\u0645 \u062A\u0646\u0638\u06CC\u0645 \u0646\u0634\u062F\u0647");
      }
      const subId = generateUUID().replace(/-/g, "").slice(0, 16);
      const subData = {
        id: subId,
        name: body2.name || "X4G",
        config: connType === "direct" ? null : body2.config,
        connType,
        whiteIps: body2.whiteIps || [],
        ports: body2.ports || [80],
        count: body2.count || 1,
        configNamePrefix: body2.configNamePrefix || "X4G",
        createdAt: Date.now()
      };
      await kv.put("sub_" + subId, JSON.stringify(subData));
      cacheSubs.set(subId, { data: subData, time: nowMs() });
      clearAdminListCache();
      const host = url.hostname;
      return new Response(JSON.stringify({
        success: true,
        subId,
        subUrl: `https://${host}/sub/${subId}`
      }), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (e) {
      return new Response(JSON.stringify({ success: false, error: e.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
  if (path === "/admin/api/subs" && request.method === "GET") {
    try {
      const kv = env[KV_NAMESPACE];
      if (!kv) return new Response(JSON.stringify({ success: true, subs: [] }));
      const subsData = await getSubsList(kv);
      const host = url.hostname;
      const subs = subsData.map((parsed) => ({
        id: parsed.id,
        name: parsed.name,
        configs: parsed.count,
        createdAt: parsed.createdAt,
        connType: parsed.connType || "indirect",
        subUrl: `https://${host}/sub/${parsed.id}`
      }));
      return new Response(JSON.stringify({
        success: true,
        subs
      }), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (e) {
      return new Response(JSON.stringify({ success: false, error: e.message, subs: [] }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
  if (path.startsWith("/admin/api/subs/") && request.method === "DELETE") {
    try {
      const subId = path.replace("/admin/api/subs/", "");
      const kv = env[KV_NAMESPACE];
      if (kv) await kv.delete("sub_" + subId);
      cacheSubs.delete(subId);
      cacheMissingSubs.delete(subId);
      clearAdminListCache();
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (e) {
      return new Response(JSON.stringify({ success: false, error: e.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
  if (path.startsWith("/sub/")) {
    const subId = path.replace("/sub/", "");
    return handleSubPage(subId, env, url.hostname);
  }
  const kvProxy = env[KV_NAMESPACE];
  let proxyConfig = null;
  let adminCfg = null;
  if (kvProxy) {
    try {
      const adminData = await getAdminData(kvProxy);
      adminCfg = adminData;
      if (adminData) proxyConfig = adminData.config;
    } catch (e) {
      adminCfg = cacheAdminData;
      if (cacheAdminData) proxyConfig = cacheAdminData.config;
    }
  }
  const isWsUpgrade = (request.headers.get("Upgrade") || "").toLowerCase() === "websocket";
  const directPathCfg = adminCfg && adminCfg.directPath || "/direct";
  if (isWsUpgrade && adminCfg && adminCfg.directUuid && path === directPathCfg) {
    return handleDirectWS(adminCfg);
  }
  if (!proxyConfig || !proxyConfig.host) {
    return new Response("Not found", { status: 404 });
  }
  let targetHost = url.hostname;
  if (proxyConfig && proxyConfig.host) {
    targetHost = proxyConfig.host;
  }
  const TARGET = "https://" + targetHost;
  const upgrade = request.headers.get("Upgrade") || "";
  if (upgrade.toLowerCase() === "websocket") {
    return fetch(TARGET + path + url.search, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
  }
  const targetUrl = TARGET + path + url.search;
  const headers = new Headers(request.headers);
  headers.set("Host", targetHost);
  headers.set("X-Forwarded-For", request.headers.get("CF-Connecting-IP") || "");
  headers.set("X-Forwarded-Proto", "https");
  headers.set("X-Real-IP", request.headers.get("CF-Connecting-IP") || "");
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "*");
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
  headers.set("Pragma", "no-cache");
  headers.set("Connection", "keep-alive");
  headers.set("Accept", "*/*");
  headers.set("Accept-Encoding", "gzip, deflate, br");
  let body = null;
  if (request.method !== "GET" && request.method !== "HEAD") {
    try {
      body = await request.arrayBuffer();
    } catch (e) {
    }
  }
  const response = await fetch(targetUrl, {
    method: request.method,
    headers,
    body,
    redirect: "follow"
  });
  const responseHeaders = new Headers(response.headers);
  responseHeaders.set("Access-Control-Allow-Origin", "*");
  responseHeaders.set("Access-Control-Allow-Credentials", "true");
  responseHeaders.set("Cache-Control", "no-cache, no-store, must-revalidate");
  responseHeaders.set("Pragma", "no-cache");
  if (!responseHeaders.has("Content-Type")) {
    responseHeaders.set("Content-Type", "application/octet-stream");
  }
  return new Response(safeStream(response.body), {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders
  });
}
function safeStream(src) {
  if (!src) return null;
  const reader = src.getReader();
  return new ReadableStream({
    async pull(controller) {
      try {
        const { done, value } = await reader.read();
        if (done) controller.close();
        else controller.enqueue(value);
      } catch (e) {
        console.error("proxy stream error:", e && e.stack ? e.stack : e);
        try { controller.close(); } catch (_) {}
      }
    },
    cancel(reason) {
      reader.cancel(reason).catch(() => {});
    }
  });
}
var index_default = {
  async fetch(request, env, ctx) {
    try {
      return await handleRequest(request, env);
    } catch (e) {
      console.error("handler error:", e && e.stack ? e.stack : e);
      return new Response("Error: " + (e && e.message ? e.message : e), { status: 500 });
    }
  }
};
export {
  index_default as default
};
