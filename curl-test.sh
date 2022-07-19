# Create
curl -X POST http://localhost:5000/api/timeline_post -d 'date=May2022&title=Summer U1&events=MLH Fellowship'
# Fetch
curl http://localhost:5000/api/timeline_post
# Delete
curl -X DELETE http://localhost:5000/api/timeline_post -d 'id=1'