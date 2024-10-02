// pages/Home.js
import React, { useState } from "react";
import { Badge } from "react-bootstrap";

import Ajuster from "../assets/images/Ajuster.svg";
import Transferer from "../assets/images/Transferer.svg";
import Solder from "../assets/images/Solder.svg";

import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const tableData = useSelector((state) => state.tableData);

  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch({ type: 'DELETE_DATA', payload: index });
  };


  return (
    <div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered w-100">
          <thead>
            <tr>
              <th scope="col">Utilisateurs</th>
              <th scope="col">Categorie</th>
              <th scope="col">Periode</th>
              <th scope="col">Solde actuel</th>
              <th scope="col">Solde pris</th>
              <th scope="col">Solde futur</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Darléne Menson Dujon</td>
              <td>
                <Badge bg="info" className="rounded-circle px-1 py-0 me-2">
                  &nbsp;
                </Badge>
                Congés Payés
              </td>
              <td>2020-2021</td>
              <td>10</td>
              <td>5</td>
              <td>15</td>
              <td className="d-md-flex justify-content-between">
                <img src={Ajuster} alt="Ajuster" />
                <img src={Transferer} alt="Transferer" />
                <img src={Solder} alt="Solder"  />
              </td>
            </tr>
            <tr>
              <td>Marlon Brandon</td>
              <td>
                <Badge bg="warning" className="rounded-circle px-1 py-0 me-2">
                  &nbsp;
                </Badge>
                RTT
              </td>
              <td>2022-2023</td>
              <td>8</td>
              <td>3</td>
              <td>5</td>
              <td className="d-md-flex justify-content-between">
                <img src={Ajuster} alt="Ajuster" />
                <img src={Transferer} alt="Transferer" />
                <img src={Solder} alt="Solder"  />
              </td>
            </tr>
            <tr>
              <td>Darléne Menson Dujon</td>
              <td>
                <Badge bg="info" className="rounded-circle px-1 py-0 me-2">
                  &nbsp;
                </Badge>
                Congés Payés
              </td>
              <td>2024-2025</td>
              <td>20</td>
              <td>10</td>
              <td>10</td>
              <td className="d-md-flex justify-content-between">
                <img src={Ajuster} alt="Ajuster" />
                <img src={Transferer} alt="Transferer" />
                <img src={Solder} alt="Solder" />
              </td>
            </tr>

            {/* Dynamic rows from Redux store */}
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.utilisateur}</td>
                <td>
                  <Badge
                    bg={
                      row.categorie === "Conges Payes" ? "success" : "warning"
                    }
                    className="rounded-circle px-1 py-0 me-2"
                  >
                    &nbsp;
                  </Badge>
                  {row.categorie}
                </td>
                <td>{row.periode}</td>
                <td>{row.soldeActuel}</td>
                <td>{row.soldePris}</td>
                <td>{row.soldeFutur}</td>
                <td className="d-md-flex justify-content-between">
                  <img src={Ajuster} alt="Ajuster" />
                  <img src={Transferer} alt="Transferer" />
                  <img src={Solder} alt="Solder" onClick={() => handleDelete(index)} className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
