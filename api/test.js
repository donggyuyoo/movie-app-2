export default function handler(request, response) {
  response.status(200).jason({
    name: 'Heropy',
    age: 85,
    isValid: true
  }
  )
}