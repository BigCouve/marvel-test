

function accessToMarvelAPI(){
    const public_key = import.meta.env.VITE_PUBLIC_API_KEY;
    const private_key = import.meta.env.VITE_PRIVATE_API_KEY;
    const timestamp = 1;
    const hash = SparkMD5.hash(timestamp+private_key+public_key);

    return {
        "public_key" : public_key,
        "private_key" : private_key,
        "timestamp" : timestamp,
        "hash" : hash
    }
}

export { accessToMarvelAPI };
