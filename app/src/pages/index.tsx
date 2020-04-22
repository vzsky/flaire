import useSWR from "swr"
import { getData } from "../fetcher"

export default () => {
	const { data, error } = useSWR(["user/all"], getData)
	console.log(data, error)

	return (
		<>
			<h1>Hello World</h1>
			users list
			<ul>{data && data.map((val: any) => <li>{val.name}</li>)}</ul>
		</>
	)
}
