// Port Scanner
document.getElementById('port-scan-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const targetIP = document.getElementById('target').value;
  const startPort = parseInt(document.getElementById('start-port').value);
  const endPort = parseInt(document.getElementById('end-port').value);

  console.log(`Scanning ports on ${targetIP} from ${startPort} to ${endPort}...`);
  const results = ['Port 80: Open', 'Port 443: Open']; // Mock data
  const resultList = document.getElementById('port-scan-results');
  resultList.innerHTML = results.map(result => `<li>${result}</li>`).join('');
});

// Hash Generator
document.getElementById('generate-hash').addEventListener('click', () => {
  const text = document.getElementById('hash-text').value;
  console.log(`Generating hash for: ${text}`);
  const hash = btoa(text); // Mock hash using Base64
  document.getElementById('hash-result').innerText = `Hash: ${hash}`;
});

// Phishing Simulation
document.getElementById('phishing-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('phish-username').value;
  const password = document.getElementById('phish-password').value;
  console.log(`Phishing attempt: ${username}, ${password}`);
  alert('Phishing simulation submitted! (Mock response)');
});

// Brute Force Simulation
document.getElementById('brute-force-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const targetURL = document.getElementById('brute-url').value;
  const username = document.getElementById('brute-username').value;
  console.log(`Starting brute-force attack on ${targetURL} for username: ${username}`);
  document.getElementById('brute-force-status').innerText = 'Attack in progress... (Mock response)';
});

// DDoS Simulation
document.getElementById('ddos-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const targetURL = document.getElementById('ddos-url').value;
  const requestCount = parseInt(document.getElementById('ddos-count').value);
  console.log(`Sending ${requestCount} requests to ${targetURL}...`);
  document.getElementById('ddos-status').innerText = `DDoS attack simulated with ${requestCount} requests! (Mock response)`;
});