var C='avc-v1',A=["/", "/vapi-vs-retell.html", "/ai-voice-agent-cost-per-minute.html", "/about.html", "/contact.html", "/disclaimer.html", "/privacy.html", "/terms.html", "/offline.html", "/style.css", "/icon-192.png"];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(A)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C}).map(function(n){return caches.delete(n)}))}));self.clients.claim()});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;
e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(C).then(function(x){x.put(e.request,c)});return r}).catch(function(){return caches.match(e.request).then(function(m){return m||(e.request.mode==='navigate'?caches.match('/offline.html'):undefined)})}))});
