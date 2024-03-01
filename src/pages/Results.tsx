import { useSearchParams } from "react-router-dom"
import SearchResults from "../components/SearchResults"
import MainContent from "../layouts/MainContent"

const Results = () => {
  const [searchParams] = useSearchParams()
  const search_query = searchParams.get('search_query')!

  return (
    <MainContent>
      <SearchResults query={search_query} />
    </MainContent>
  )
}

export default Results