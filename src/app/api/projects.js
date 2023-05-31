const projects = [
  {
    "id": 1,
    "title": "Project 1",
    "href": "project1", 
    "planning": "Project 1 Planning goes here",
    "design": "Took a long time",
    "development": "Took a long time"
  },
  { 
    "id": 2,
    "title": "Project 2",
    "href": "project2",
    "planning": "Project 2 Planning goes here",
    "design": "Took a long time",
    "development": "Took a long time"
  },
  {
    "id": 3,
    "title": "Project 3",
    "href": "project3",
    "planning": "Project 3 Planning goes here",
    "design": "Took a long time",
    "development": "Took a long time"
  },
  {
    "id": 4,
    "title": "Project 4",
    "href": "project4", 
    "planning": "Project 4 Planning goes here",
    "design": "Took a long time",
    "development": "Took a long time"
  },
  {
    "id": 5,
    "title": "Project 5",
    "href": "project5", 
    "planning": "Project 5 Planning goes here",
    "design": "Took a long time",
    "development": "Took a long time"
  }
]

export default function handler(req, res) {
  // You can perform any necessary data transformations or logic here
  res.status(200).json(projects);
}