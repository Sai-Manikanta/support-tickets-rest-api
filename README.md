# Support tickets rest api

## tickets resorse end points

- GET all tickets - /api/v1/tickets
- POST ticket - /api/v1/tickets
- PUT UPDATE DELETE and GET single ticket -> /api/v1/tickets/:id

## Querys types for Tickets resource

- pagination -> tickets?page=3&limit=2
- Selecting fields -> tickets?fields=message,reply
- Sort by field -> tickets?sort=posted_date
- filter -> tickets?status=open
- Search -> tickets?searchBy=status&search=Clo (match to close)
