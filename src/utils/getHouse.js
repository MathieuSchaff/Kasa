export default function getHouse(data, id) {
  return data.find(house => house.id === id)
}
