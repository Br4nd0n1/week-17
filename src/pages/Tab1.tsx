import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import './Tab1.css';

interface Item {
  ID: string;
  post_title: string;
  item_type: string;
  item_color: string;
  image_url: string;
}

interface Department {
  ID: string;
  department_name: string;
  department_head: string;
  department_size: string;
  image_url: string;
}

interface Location {
  ID: string;
  location_city: string;
  location_zip: string;
  location_phone_number: string;
  image_url: string;
}

const Tab1 = () => {
  const [items, setItems] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);

  const itemsURL = "https://dev-cs5513-brandon.pantheonsite.io/wp-json/twentytwentyone-child/v1/show-items-mobile";
  const departmentsURL = "https://dev-cs5513-brandon.pantheonsite.io/wp-json/twentytwentyone-child/v1/show-departments-mobile";
  const locationsURL = "https://dev-cs5513-brandon.pantheonsite.io/wp-json/twentytwentyone-child/v1/show-locations-mobile";


  useEffect(() => {
    fetch(itemsURL) 
    .then(response => response.json()) 
    .then(data => setItems(data));

    fetch(departmentsURL)
    .then(response => response.json())
    .then(data => setDepartments(data));

    fetch(locationsURL)
    .then(response => response.json())
    .then(data => setLocations(data));
  },[])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List of Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {items.map((item: Item, index: number) => (
            <IonItem key={index}>
              <IonCard>
                <IonImg src={item.image_url} />
                <IonCardHeader>
                  <IonCardTitle>{item.post_title}</IonCardTitle>
                  <IonCardSubtitle>Item Type: {item.item_type}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Color: {item.item_color}
                </IonCardContent>
              </IonCard>
            </IonItem>
          ))}
          {departments.map((department: Department, index: number) => (
            <IonItem key={index}>
              <IonCard>
                <IonImg src={department.image_url} />
                <IonCardHeader>
                  <IonCardTitle>{department.department_name}</IonCardTitle>
                  <IonCardSubtitle>Department Head: {department.department_head}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Department Size: {department.department_size}
                </IonCardContent>
              </IonCard>
            </IonItem>
          ))}
           {locations.map((location: Location, index: number) => (
            <IonItem key={index}>
              <IonCard>
                <IonImg src={location.image_url} />
                <IonCardHeader>
                  <IonCardTitle>{location.location_city}</IonCardTitle>
                  <IonCardSubtitle>Zip Code: {location.location_zip}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Phone Number: {location.location_phone_number}
                </IonCardContent>
              </IonCard>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
