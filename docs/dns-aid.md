# DNS for AI Discovery (DNS-AID) — alerthawk.net

DNS-AID records enable agent discovery via DNS SVCB/HTTPS records. These must be configured at your DNS provider (not in the Next.js application).

## Required records

Add the following records to the `alerthawk.net` zone. Enable DNSSEC signing on the zone so validating resolvers return authenticated data.

```dns
; Agent discovery index
_index._agents.alerthawk.net. 3600 IN SVCB 1 alerthawk.net. alpn="h3,h2" port=443 mandatory=alpn,port

; Agent-to-agent endpoint
_a2a._agents.alerthawk.net. 3600 IN SVCB 1 alerthawk.net. alpn="a2a" port=443 mandatory=alpn,port

; MCP server endpoint
_mcp._agents.alerthawk.net. 3600 IN SVCB 1 alerthawk.net. alpn="mcp" port=443 mandatory=alpn,port
```

## Verification

Query via DNS-over-HTTPS:

```bash
curl -H 'accept: application/dns-json' \
  'https://cloudflare-dns.com/dns-query?name=_index._agents.alerthawk.net&type=SVCB'
```

## References

- [DNS-AID draft](https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/)
- [RFC 9460 — SVCB and HTTPS records](https://www.rfc-editor.org/rfc/rfc9460)
