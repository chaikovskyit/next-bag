'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
	return <h1>Oooppss...!!! {error.message}</h1>;
}
