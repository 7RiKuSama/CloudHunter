import { useState, useEffect } from "react"

const useNews = () => {
  const [news, setNews] = useState([])
  const [newsLoading, setNewsLoading] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://gnews.io/api/v4/search?q=weather&lang=en&max=10&token=9acfec80a7abd14368d0b6b041c35785`
        const response = await fetch(url)
        if (!response.ok) throw new Error("Couldn't fetch the news articles")

        const data = await response.json()
  
        setNews(data)
        console.log(data)
      } catch (error) {
        console.error("News fetch error:", error)
      } finally {
        setNewsLoading(true)
  
      }
    }
    fetchNews()
  }, [])

  return { news, newsLoading }
}

export default useNews
