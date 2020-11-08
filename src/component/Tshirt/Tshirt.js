import React from 'react';
import { Rnd } from "react-rnd";
import tshirt from '../../images/t.webp';
import Modal from 'react-modal';

// Modal Style
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')


const Tshirt = () => {
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [text, setText] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        closeModal()
    }
    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
    
    function closeModal(){
        setIsOpen(false);
    }
    
    // Text resizer style
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px #ddd",
        background: "transparent"
   };
    return (
        <section>
            <div className="container">
            <button onClick={openModal} className="common-btn">Write text</button>
            {/* Modal Start */}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
 
                <h2 ref={_subtitle => (subtitle = _subtitle)} style={{margin: "20px 0"}}>Your Text</h2>
                <button onClick={closeModal} className="common-btn">close</button>
                <form onSubmit={handleSubmit} className="modal-form">
                    <input type="text" onChange={e=> setText(e.target.value)} required/>
                </form>
            </Modal>
            {/* Modal Close */}

            {/* Tshirt Image */}
            <div className="tshirt-image">
                 <img src={tshirt} alt=""/>
            </div>

            {/* Text Resizer */}
            <Rnd
                style={style}
                default={{
                x: 40,
                y: 140,
                width: 320,
                height: 200
                }}
            >
                 {text}
            </Rnd>
            {/* Text Resizer end */}

        </div>
      </section>
    );
};

export default Tshirt;

 