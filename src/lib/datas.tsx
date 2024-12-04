
export interface ListData{
    id:number;
    title:string;
    img:string;
    bedroom:number;
    bathroom:number;
    price:number;
    address:string;
    latitude:number;
    longitude:number;
};


export type singleData={
  id:number;
  title:string;
  price:number;
  images:string[];
  bedRooms:number;
  bathroom: 1,
  size: 861,
  latitude: 51.5074,
  longitude: -0.1278,
  city: string;
  address: string;
  school: string;
  bus: string;
  restaurant: string;
  description:string;
}

export const listData: ListData[] = [
    {
      id: 1,
      title: "A Great Apartment Next to the Beach!",
      img: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 2,
      bathroom: 1,
      price: 1000,
      address: "456 Park Avenue, London",
      latitude: 13.0843,
      longitude: 13.0843,
    },
    {
      id: 2,
      title: "An Awesome Apartment Near the Park! Almost too good to be true!",
      img: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 3,
      bathroom: 2,
      price: 1500,
      address: "789 Oxford Street, London",
      latitude: 9.9312,
      longitude: 76.2673,
    },
    {
      id: 3,
      title: "A New Apartment in the City!",
      img: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 1,
      bathroom: 1,
      price: 800,
      address: "101 Baker Street, London",
      latitude: 12.9716,
      longitude:  77.5946,
    },
    {
      id: 4,
      title: "Great Location! Great Price! Great Apartment!",
      img: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 2,
      bathroom: 1,
      price: 1000,
      address: "234 Kingsway, London,",
      latitude: 11.2588,
      longitude: 75.7804,
    },
    {
      id: 5,
      title: "The Grand Serene Heights Residences",
      img: "https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 3,
      bathroom: 2,
      price: 1500,
      address: "567 Victoria Road, London",
      latitude: 12.2958,
      longitude: 76.6394,
    },
    {
      id: 6,
      title: "Azure Vista at Riverfront Gardens",
      img: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 1,
      bathroom: 1,
      price: 800,
      address: "890 Regent Street, London",
      latitude: 11.9416,
      longitude: 79.8083,
    },
    {
      id: 7,
      title: "Urban Oasis Luxury Apartments & Suites",
      img: "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 2,
      bathroom: 1,
      price: 1000,
      address: "112 Piccadilly, London",
      latitude: 8.5241,
      longitude: 76.9366,
    },
    {
      id: 8,
      title: "Celestial Towers of Evergreen Valley",
      img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 3,
      bathroom: 2,
      price: 1500,
      address: "8765 Main High Street, London",
      latitude: 11.0168,
      longitude: 76.9558,
    },
  ];


  

  export const singlePostData: singleData = {
    id: 1,
    title: "Beautiful Apartment",
    price: 1200,
    images: [
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    bedRooms: 2,
    bathroom: 1,
    size: 861,
    latitude: 51.5074,
    longitude: -0.1278,
    city: "London",
    address: "1234 Broadway St",
    school: "250m away",
    bus: "100m away",
    restaurant: "50m away",
    description:
      "Future alike hill pull picture swim magic chain seed engineer nest outer raise bound easy poetry gain loud weigh me recognize farmer bare danger. actually put square leg vessels earth engine matter key cup indeed body film century shut place environment were stage vertical roof bottom lady function breeze darkness beside tin view local breathe carbon swam declared magnet escape has from pile apart route coffee storm someone hold space use ahead sheep jungle closely natural attached part top grain your grade trade corn salmon trouble new bend most teacher range anybody every seat fifteen eventually",
  };
  


  export type UserDaata={
     id:number;
     name:string;
     img:string;
  }
  export const userData: UserDaata = {
    id: 1,
    name: "John Doe",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  };