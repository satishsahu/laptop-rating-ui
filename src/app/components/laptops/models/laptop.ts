export interface Laptop{
    id: number,
    vendor: string,
    model: string,
    os: string,
    customerLaptopRatings: [],
    processor: {
        type: string,
        generation: string
    },
    ram: {
        size: number,
        measure: string
    },
    hdd: {
        size: number,
        measure: string
    },
    display: {
        size: number,
        measure: string 
    },
    price:{
        rate: number,
        currency: string
    }
    image: string
    //hide: boolean
}