const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:4000";


export async function api<T>(
  endpoint:string,
  options?:RequestInit
):Promise<T>{


  const response =
    await fetch(
      `${API_URL}${endpoint}`,
      {
        headers:{
          "Content-Type":
          "application/json",
        },
        ...options,
      }
    );


  if(!response.ok){

    throw new Error(
      "API request failed"
    );

  }


  return response.json();

}
