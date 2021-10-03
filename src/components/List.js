import React  from 'react'
import ListDetails from './ListDetails'

function List(props){
    const Listemp=[
        {"Empid":101,"empname":"Suresh","phone":7898363528,"city":"Bangalore","Qualification":"B.Tech"},
        {"Empid":102,"empname":"Ajay","phone":934627293837,"city":"Mysore","Qualification":"B.Tech"},
        {"Empid":102,"empname":"Sumit","phone":93877393792,"city":"Pune","Qualification":"B.Tech"},
        {"Empid":103,"empname":"Amith","phone":93836528200,"city":"Mumbai","Qualification":"B.Tech"},
        {"Empid":104,"empname":"Sunitha","phone":637263452622,"city":"Hydrabad","Qualification":"B.Tech"},
        {"Empid":105,"empname":"Rajesh","phone":9877653629,"city":"Pune","Qualification":"B.Tech"},
        {"Empid":106,"empname":"Sathish","phone":93735272927,"city":"Bangalore","Qualification":"B.Tech"},
        {"Empid":107,"empname":"Rajashekar","phone":98736352427,"city":"Bangalore","Qualification":"B.Tech"},
        {"Empid":108,"empname":"Manju","phone":98766553292,"city":"Bangalore","Qualification":"B.Tech"},
        {"Empid":109,"empname":"Sukesh","phone":9876543221,"city":"Chennai","Qualification":"B.Tech"},
        {"Empid":110,"empname":"Vinay","phone":87292725372,"city":"Noida","Qualification":"B.Tech"},
        {"Empid":111,"empname":"Srinivasa","phone":98724263749,"city":"Bangalore","Qualification":"B.Tech"},
        {"Empid":112,"empname":"Manasa","phone":73840293635,"city":"Bangalore","Qualification":"B.Tech"},
        {"Empid":113,"empname":"Bhoomika","phone":9826353628373,"city":"Pune","Qualification":"B.Tech"},
        {"Empid":114,"empname":"Anuj","phone":9383643725,"city":"Mumbai","Qualification":"B.Tech"},
        {"Empid":115,"empname":"Anusha","phone":839362738493,"city":"Mumbai","Qualification":"B.Tech"},
        {"Empid":116,"empname":"Elango","phone":7345672029,"city":"Bangalore","Qualification":"B.Tech"},
        {"Empid":117,"empname":"Divya","phone":9887654372,"city":"Bangalore","Qualification":"B.Tech"},
        {"Empid":118,"empname":"Pooja","phone":9876543210,"city":"Jaipur","Qualification":"B.Tech"},
        {"Empid":119,"empname":"Pavan","phone":9765432180,"city":"Pune","Qualification":"B.Tech"},
        {"Empid":120,"empname":"Harish","phone":8907654321,"city":"Mumbai","Qualification":"B.Tech"},
        ]
        return(
            <div>
                <ListDetails mylist={Listemp} />
            </div>
        )
}
export default List
