import React, { useState, useEffect } from "react";
import { Nav, Button, Navbar, NavDropdown, Modal } from "react-bootstrap";
import BurgerMenu from "../../assets/images/Burger button.svg";
import sidebarGraphic from "../../assets/images/Graphic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faHome,
  faPlus,
  faIdCard,
  faCheck,
  faListCheck,
  faScaleBalanced,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/Logo.svg";
import Card from "../cards/cards";
import InputField from "../form/Input/inputField";
import SelectLabel from "../form/select/selectDropdown";
import DateRangePicker from "../form/daterangepicker/rangepicker";

import ModulePlanning from "../../assets/images/Module_Planning.svg";
import ModuleAbsences from "../../assets/images/Module_Absences.svg";
import ModuleHeures from "../../assets/images/Module_Heures.svg";
import ModuleNotedeFrais from "../../assets/images/Module_NotedeFrais.svg";
import ModulePrésence from "../../assets/images/Module_Présence.svg";
import ModuleCompétences from "../../assets/images/Module_Compétences.svg";
import ModuleSalaireetPAie from "../../assets/images/Module_SalaireetPAie.svg";
import ModuleEntretiens from "../../assets/images/Module_Entretiens.svg";
import ModuleMatériels from "../../assets/images/Module_Matériels.svg";
import ModuleDocuments from "../../assets/images/Mdule_Documents.svg";
import ModuleRH from "../../assets/images/Module_RH.svg";

import { addYears } from "date-fns";

import { useDispatch } from "react-redux";

const Sidebar = ({ sidebarOpen }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openSubmenu1, setOpenSubmenu1] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showAddMegaMenu, setshowAddMegaMenu] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [formData, setFormData] = useState({
    utilisateur: "",
    categorie: "",
    // periode: { startDate: new Date(), endDate: new Date() },
    soldeActuel: "",
    soldePris: "",
    soldeFutur: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const handleDateChange = (value) => {
  //   console.log("handleDateChange value", value);

  //   // Assuming value is an object containing startDate and endDate
  //   const { startDate, endDate } = value;
  // console.log("startDate",startDate)
  // console.log("endDate",endDate)
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     periode: {
  //       ...prevData.periode, // Keep other properties in periode if needed
  //       startDate, // Update the startDate
  //       endDate, // Update the endDate
  //     },
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid =
      formData.utilisateur &&
      formData.categorie &&
      // formData.periode.startDate &&
      // formData.periode.endDate &&
      formData.soldeActuel &&
      formData.soldePris &&
      formData.soldeFutur;

    if (!isFormValid) {
      console.log("Form validation failed", formData);
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form Data on Submit:", formData);

    const isDuplicate = submittedData.some(
      (data) =>
        data.utilisateur === formData.utilisateur &&
        data.categorie === formData.categorie
    );

    if (isDuplicate) {
      alert("Cette combinaison d'utilisateur et de catégorie existe déjà.");
      return;
    }

    console.log("form data before dispatch", formData);
    dispatch({ type: "ADD_DATA", payload: formData });

    setSubmittedData([...submittedData, formData]);

    setFormData({
      utilisateur: "",
      categorie: "",
      periode: { startDate: new Date(), endDate: new Date() },
      soldeActuel: "",
      soldePris: "",
      soldeFutur: "",
    });

    handleClose();
    console.log("form data after dispatch", formData);
  };

  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  const toggleMegaMenu = () => {
    setShowMegaMenu(!showMegaMenu);
  };

  const toggleAddMegaMenu = () => {
    setshowAddMegaMenu(!showAddMegaMenu);
    setShowMegaMenu(false);
  };

  const closeMegaMenu = () => {
    setShowMegaMenu(false);
    setshowAddMegaMenu(false);
  };

  const options = [
    { value: "Darléne Menson Dujon", label: "Darléne Menson Dujon" },
    { value: "Marlon Brandon", label: "Marlon Brandon" },
  ];
  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  const [selectedCard, setSelectedCard] = useState("Planning");

  const handleCardClick = (moduleTitle) => {
    setSelectedCard(moduleTitle);
  };

  const cardData = [
    { imageSrc: ModulePlanning, moduleTitle: "Planning" },
    { imageSrc: ModuleAbsences, moduleTitle: "Absences" },
    { imageSrc: ModuleHeures, moduleTitle: "Heures" },
    { imageSrc: ModuleNotedeFrais, moduleTitle: "Note de Frais" },
    { imageSrc: ModulePrésence, moduleTitle: "Présence" },
    { imageSrc: ModuleCompétences, moduleTitle: "Compétences" },
    { imageSrc: ModuleSalaireetPAie, moduleTitle: "Salaire et paie" },
    { imageSrc: ModuleEntretiens, moduleTitle: "Entretiens" },
    { imageSrc: ModuleMatériels, moduleTitle: "Matériels" },
    { imageSrc: ModuleDocuments, moduleTitle: "Documents" },
    { imageSrc: ModuleRH, moduleTitle: "RH" },
  ];

  return (
    <div
      className={`sidebar ${sidebarOpen ? "open" : "closed"}`}
      style={{ width: sidebarOpen ? "200px" : "0" }}
    >
      <Nav className="flex-column z-1">
        <Nav.Link href="#">
          <FontAwesomeIcon icon={faHome} />
          <span className="mx-auto">Accueil</span>
        </Nav.Link>

        <Nav.Link onClick={handleShow} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faPlus} />
          <span className="mx-auto">Ajouter</span>
        </Nav.Link>

        <Nav.Link className="d-flex justify-content-between align-items-center">
          <div>
            <FontAwesomeIcon icon={faIdCard} />
            Mon espace
          </div>
          {openSubmenu1 ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </Nav.Link>
        <Nav.Link className="d-flex justify-content-between align-items-center">
          <div>
            <FontAwesomeIcon icon={faCheck} />
            Validation
          </div>
          {openSubmenu1 ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </Nav.Link>
        <Nav.Link className="d-flex justify-content-between align-items-center">
          <div>
            <FontAwesomeIcon icon={faListCheck} />
            Indicateurs
          </div>
          {openSubmenu1 ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </Nav.Link>

        <Nav.Link
          className="d-flex justify-content-between align-items-center collapse-nav-link"
          onClick={toggleSubmenu} style={{ cursor: "pointer" }}
        >
          <div>
            <FontAwesomeIcon icon={faScaleBalanced} />
            Soldes
          </div>
          {openSubmenu ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </Nav.Link>

        {openSubmenu && (
          <div className="ml-3 submenu">
            <Nav.Link onClick={handleShowModal} className="active">
              Gestion des soldes
            </Nav.Link>
            <Nav.Link href="#">Ajuster un solde</Nav.Link>
            <Nav.Link href="#">Compteurs</Nav.Link>
            <Nav.Link href="#">Historique</Nav.Link>
          </div>
        )}

        <Nav.Link className="d-flex justify-content-between align-items-center">
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            Recherche
          </div>
          {openSubmenu1 ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </Nav.Link>
        <div className="position-absolute bottom-0 z-n1">
          <img src={sidebarGraphic} />
        </div>
      </Nav>

      {/* Mega Menu for "Ajouter" */}
      {showAddMegaMenu && (
        <>
          {/* Backdrop */}
          <div className="backdrop" onClick={closeMegaMenu}></div>

          {/* Ajouter Mega Menu */}
          {/* <div
            className="mega-menu bg-light p-4 position-fixed top-0 vh-100 d-flex flex-column justify-content-center"
            style={{ left: "200px", zIndex: "1050" }}
          >
            <div className="align-items-center">
              <img src={Logo} className="w-50 mx-auto d-block mb-5" />
              <h3>Ajouter</h3>

              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <div className="col-md-6 mb-2 mb-md-0">
                        <SelectLabel
                          selectLabel="Utilisateur"
                          options={options}
                          name="utilisateur"
                          value={formData.utilisateur}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <InputField
                          inputLabel="Categorie"
                          type="text"
                          name="categorie"
                          value={formData.categorie}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <DateRangePicker
                      inputLabel="Select Date Range"
                      value={formData.periode}
                      onChange={handleDateChange}
                      isRequired={true}
                      name="periode"
                    />
                    <p>{formData.periode.startDate.toString()}</p>
                    <p>{formData.periode.endDate.toString()}</p>
                    <div className="row my-3">
                      <div className="col-md-4 mb-2 mb-md-0">
                        <InputField
                          inputLabel="Solde Actuel"
                          type="number"
                          name="soldeActuel"
                          step="1"
                          value={formData.soldeActuel}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-4 mb-2 mb-md-0">
                        <InputField
                          inputLabel="Solde Pris"
                          type="number"
                          name="soldePris"
                          step="1"
                          value={formData.soldePris}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-4">
                        <InputField
                          inputLabel="Solde Futur"
                          type="number"
                          name="soldeFutur"
                          step="1"
                          value={formData.soldeFutur}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <button className="btn btn-primary" type="submit">
                      Sauvegarder
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
        </>
      )}

      {/* Original Mega Menu */}
      {showMegaMenu && (
        <>
          {/* Backdrop */}
          <div className="backdrop" onClick={closeMegaMenu}></div>

          {/* Mega Menu */}
          <div
            className="mega-menu bg-light p-4 position-fixed top-0 vh-100 d-flex flex-column justify-content-center"
            style={{ left: "200px", zIndex: "1050" }}
          >
            <div className="align-items-center">
              <img src={Logo} className="w-50 mx-auto d-block mb-5" />
              <div className="row">
                {cardData.map((card, index) => (
                  <div className="col-md-3 mb-2" key={index}>
                    <div
                      onClick={() => handleCardClick(card.moduleTitle)}
                      style={{
                        cursor: "pointer",
                        border:
                          selectedCard === card.moduleTitle
                            ? "2px solid #0090F5"
                            : "none",
                        borderRadius:
                          selectedCard === card.moduleTitle
                            ? "0.375rem"
                            : "0px",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <Card
                        imageSrc={card.imageSrc}
                        moduleTitle={card.moduleTitle}
                        selected={selectedCard === card.moduleTitle}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <Modal show={showModal} onHide={handleCloseModal} className="moduleModal">
        <Modal.Body>
          <div>
          <img src={Logo} className="w-50 mx-auto d-block mb-5" />
          <div className="row">
                {cardData.map((card, index) => (
                  <div className="col-md-3 mb-2" key={index}>
                    <div
                      onClick={() => handleCardClick(card.moduleTitle)}
                      style={{
                        cursor: "pointer",
                        border:
                          selectedCard === card.moduleTitle
                            ? "2px solid #0090F5"
                            : "none",
                        borderRadius:
                          selectedCard === card.moduleTitle
                            ? "0.375rem"
                            : "0px",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <Card
                        imageSrc={card.imageSrc}
                        moduleTitle={card.moduleTitle}
                        selected={selectedCard === card.moduleTitle}
                      />
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="d-flex align-items-center">
          <div>
            <img src={Logo} className="w-75 mx-auto d-block mb-5" />
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <SelectLabel
                    selectLabel="Utilisateur"
                    options={options}
                    name="utilisateur"
                    value={formData.utilisateur}
                    onChange={handleChange}
                    isRequired={true}
                  />
                </div>
                <div className="col-md-6">
                  <InputField
                    inputLabel="Categorie"
                    type="text"
                    name="categorie"
                    value={formData.categorie}
                    onChange={handleChange}
                    isRequired={true}
                  />
                </div>
              </div>

              {/* <DateRangePicker
                inputLabel="Select Date Range"
                value={formData.periode}
                onChange={handleDateChange}
                isRequired={true}
                name="periode"
              /> */}

              <div className="row my-3">
                <div className="col-md-4">
                  <InputField
                    inputLabel="Solde Actuel"
                    type="number"
                    name="soldeActuel"
                    step="1"
                    value={formData.soldeActuel}
                    onChange={handleChange}
                    isRequired={true}
                  />
                </div>
                <div className="col-md-4">
                  <InputField
                    inputLabel="Solde Pris"
                    type="number"
                    name="soldePris"
                    step="1"
                    value={formData.soldePris}
                    onChange={handleChange}
                    isRequired={true}
                  />
                </div>
                <div className="col-md-4">
                  <InputField
                    inputLabel="Solde Futur"
                    type="number"
                    name="soldeFutur"
                    step="1"
                    value={formData.soldeFutur}
                    onChange={handleChange}
                    isRequired={true}
                  />
                </div>
              </div>

              <button className="btn btn-primary mx-auto d-block" type="submit">
                Sauvegarder
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Sidebar;
