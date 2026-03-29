---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
id: "{{ .Name }}"
type: "cause" # Default to cause, override specifically for events
icon: "🕊️"
category: "General"
description: ""
utc_time: "2026-06-21T12:00:00Z"
recurrence: "once"
location: "https://example.org"
cause_info:
  - "Point 1 about the cause."
  - "Point 2 about the cause."
  - "Point 3 about the cause."
draft: false
---

# Details
Extended fact sheet and meditation guide here.
