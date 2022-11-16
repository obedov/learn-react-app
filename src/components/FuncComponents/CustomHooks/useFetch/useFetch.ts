import { useState, useEffect } from 'react';

export const useFetch = <T>(url: string): T[] => {
	const [data, setData] = useState(null as T);

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then((data: T) => setData(data));
	}, [url]);

	return [data];
};
