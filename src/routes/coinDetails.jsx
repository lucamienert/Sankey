import { useLoaderData, useParams } from "react-router-dom"
import { SingleCoin } from "../config/api"
import axios from "axios"
import { useEffect, useState } from "react"


const CoinDetails = () => {
  const { coinId } = useParams()
  const [coin, setCoin] = useState()

  console.log(coinId)

  const getCoinData = async () => {
    const { data } = await axios.get(SingleCoin(coinId))

    setCoin(data)
  }

  useEffect(() => {getCoinData()}, [])

  if (!coin)
    return (
      <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>)

  return (
    <>
      <div className="m-4">
        <img 
          src={coin?.image.large}
          alt={coin?.name}
          height={200}
        />
        <h2>{coin?.name}</h2>
      </div>
    </>
  )
}

export default CoinDetails