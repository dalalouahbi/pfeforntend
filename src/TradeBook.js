import React from 'react'
import { useState} from 'react';

function TradeBook() {
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [description, setDescription] = useState("");
  const [filepathbook, setFilepathbook] = useState("");
  const [avis, setAvis] = useState("");
  const [bookwishes, setBookwishes] = useState("");
console.log(titre, auteur, description, filepathbook,avis,bookwishes)
async function addProduct() {
    console.log(titre, auteur, description, filepathbook, avis, bookwishes);
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("auteur", auteur);
    formData.append("description", description);
    formData.append("file_path_book", filepathbook); 
    formData.append("avis", avis);
    formData.append("book_wishes", bookwishes); 
  
    console.log(formData.get("titre")); 
  
    let result = await fetch("http://127.0.0.1:8000/api/addtrade", {
      method: 'POST',
      body: formData
    });
  
    if (result.ok) { 
      alert("Data saved successfully");
    } else {
      alert("Failed to save data");
    }
  }
  
//   async function addProduct() {
//     console.log(titre, auteur, description, filepathbook,avis,bookwishes);
//     const formData = new FormData();
//     formData.append("titre", titre);
//     formData.append("auteur", auteur);
//     formData.append("description", description);
//     formData.append("filepathbook", filepathbook);
//     formData.append("avis", avis);
//     formData.append("bookwishes", bookwishes);
//     console.log(formData.titre)
//     let result =await fetch("http://127.0.0.1:8000/api/addtrade", {
//       method: 'POST',
//       body: formData
//     });
//     if (result){
//         alert(result);

//     }else{
//     alert("data non saved");

//     }
//   }
  return (
    <div>
        <div class="form-group">
        <br />
        <br />
        <br />
        <br />

      <h1>Add Trade Book</h1>
      <br />
      <form enctype="multipart/form-data"> 
      <input type="text" className='form-control' placeholder='titre' onChange={(e) => setTitre(e.target.value)} /> <br />
        <input type="text" className='form-control' placeholder='auteur' onChange={(e) => setAuteur(e.target.value)} /> <br />
        <div class="form-group">
    <textarea class="form-control" placeholder='description' id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
  </div>
        {/* <input type="text" className='form-control' placeholder='description' onChange={(e) => setDescription(e.target.value)} /> <br /> */}
        <label for="image">Choisir une image :</label>

        <input type="file" className='form-control' placeholder='file' onChange={(e) => setFilepathbook(e.target.files[0])} /> <br />
        <div class="form-group">
    <textarea class="form-control" placeholder='Avis' id="Avis" rows="3" value={avis} onChange={(e) => setAvis(e.target.value)}></textarea>
  </div>
        {/* <input type="text" className='form-control' placeholder='Avis' onChange={(e) => setAvis(e.target.value)} /> <br /> */}
        <input type="text" className='form-control' placeholder='bookwishes' onChange={(e) => setBookwishes(e.target.value)} /> <br />
        <button onClick={addProduct} className="btn btn-primary">Add</button>
      </form>

        <br />

      </div>


    </div>
    
  )
}export default TradeBook;
