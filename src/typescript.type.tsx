export type data = {
    success: boolean;
    message: {
      _id: number;
      name: string;
      country: string;
      address: string;
      city: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    }[];
  };
 export  type newhotel = {
    _id: number;
    name: string;
    country: string;
    address: string;
    city: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];

  export type RightProps = {
    hotelList : {
      _id: number,
      name: string,
      country: string,
      address: string,
      city: string,
      createdAt: string,
      updatedAt: string,
      "__v": number

    }[] | null

    deleteHotel : (id : number) => void
}

export type HotelDetails ={
    name: string | undefined,
      country: string | undefined,
      address: string | undefined,
      city: string | undefined,

}