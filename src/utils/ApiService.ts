
type ValidDataType = "photos" | "posts"

type ApiObject = {
    id: number
}

class ApiService<T extends ApiObject> {
    private BASE_URL = "https://jsonplaceholder.typicode.com"
    dataType: ValidDataType 

    constructor(dataType: ValidDataType) {
        this.dataType = dataType
    }

    private getHeaders() {
        return {
            "Content-Type": "application/json",
        }
    }

    async getList(): Promise<T[]> {
        const response = await fetch(
            `${this.BASE_URL}/${this.dataType}?_limit=20,`,
            {
              headers: this.getHeaders()
            }
        );
        if(response.ok) {
            const data: T[] = await response.json()

            return data
        }
        throw new Error("Error in fetching list")
    }

    async getDetail(id: number): Promise<T | null> {
        const response = await fetch(
            `${this.BASE_URL}/${this.dataType}/${id}`,
            {
              headers: this.getHeaders()
            }
        );
        if(response.ok) {
            const data: T = await response.json()
            return data
        }
        return null
    }

}

// const photoApiService = new ApiService<Photo>("photos")

export default ApiService