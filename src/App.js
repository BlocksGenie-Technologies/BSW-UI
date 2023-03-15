import React, { useState, useEffect } from 'react';
import games from "./games";
import './bracket.css';

function App() {
  const [round2_1, setRound2_1] = useState("");
  const [round2_2, setRound2_2] = useState("");
  const [round2_3, setRound2_3] = useState("");
  const [round2_4, setRound2_4] = useState("");
  const [round2_5, setRound2_5] = useState("");
  const [round2_6, setRound2_6] = useState("");
  const [round2_7, setRound2_7] = useState("");
  const [round2_8, setRound2_8] = useState("");
  const [round2_9, setRound2_9] = useState("");
  const [round2_10, setRound2_10] = useState("");
  const [round2_11, setRound2_11] = useState("");
  const [round2_12, setRound2_12] = useState("");
  const [round2_13, setRound2_13] = useState("");
  const [round2_14, setRound2_14] = useState("");
  const [round2_15, setRound2_15] = useState("");
  const [round2_16, setRound2_16] = useState("");
  const [round2_17, setRound2_17] = useState("");
  const [round2_18, setRound2_18] = useState("");
  const [round2_19, setRound2_19] = useState("");
  const [round2_20, setRound2_20] = useState("");
  const [round2_21, setRound2_21] = useState("");
  const [round2_22, setRound2_22] = useState("");
  const [round2_23, setRound2_23] = useState("");
  const [round2_24, setRound2_24] = useState("");
  const [round2_25, setRound2_25] = useState("");
  const [round2_26, setRound2_26] = useState("");
  const [round2_27, setRound2_27] = useState("");
  const [round2_28, setRound2_28] = useState("");
  const [round2_29, setRound2_29] = useState("");
  const [round2_30, setRound2_30] = useState("");
  const [round2_31, setRound2_31] = useState("");
  const [round2_32, setRound2_32] = useState("");
  const [round3_1, setRound3_1] = useState("");
  const [round3_2, setRound3_2] = useState("");
  const [round3_3, setRound3_3] = useState("");
  const [round3_4, setRound3_4] = useState("");
  const [round3_5, setRound3_5] = useState("");
  const [round3_6, setRound3_6] = useState("");
  const [round3_7, setRound3_7] = useState("");
  const [round3_8, setRound3_8] = useState("");
  const [round3_9, setRound3_9] = useState("");
  const [round3_10, setRound3_10] = useState("");
  const [round3_11, setRound3_11] = useState("");
  const [round3_12, setRound3_12] = useState("");
  const [round3_13, setRound3_13] = useState("");
  const [round3_14, setRound3_14] = useState("");
  const [round3_15, setRound3_15] = useState("");
  const [round3_16, setRound3_16] = useState("");
  const [round4_1, setRound4_1] = useState("");
  const [round4_2, setRound4_2] = useState("");
  const [round4_3, setRound4_3] = useState("");
  const [round4_4, setRound4_4] = useState("");
  const [round4_5, setRound4_5] = useState("");
  const [round4_6, setRound4_6] = useState("");
  const [round4_7, setRound4_7] = useState("");
  const [round4_8, setRound4_8] = useState("");
  const [round5_1, setRound5_1] = useState("");
  const [round5_2, setRound5_2] = useState("");
  const [round5_3, setRound5_3] = useState("");
  const [round5_4, setRound5_4] = useState("");
  const [round6_1, setRound6_1] = useState("");
  const [round6_2, setRound6_2] = useState("");
  const [final, setFinal] = useState("");
  const [show, setShow] = useState(false);
  const [connected, setConnected] = useState(false);
  const [teams, setTeams] = useState([]);

  const Modal = (show) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <div className="modal-wrapper">
          <div className="modal-main">
            <p>Mint</p>
            <span className="fees">
              Mint Fee: $50 USDC
            </span>
            <div className='input'>
              <input placeholder='Name Your NFB!!' type="text"/>
              <button>{connected ? "MINT" : "Connect"}</button>
            </div>
            <ul>
              <li>Prize Pool: $10000</li>
              <li>Minted: 200</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  //console.log(teams);
  const check = (team)=>{
    setTeams([...teams,team]);
  }

  console.log(round2_1, round2_2,round2_3, round2_4, round2_5,round2_6,round2_7,round2_8,round2_9,round2_10,round2_11,round2_12,
    round2_13,round2_14,round2_15,round2_16,round2_17,round2_18,round2_19,round2_20,round2_21,round2_22,round2_23,round2_24,
    round2_25,round2_26,round2_27,round2_28,round2_29,round2_30,round2_31,round2_32,round3_1, round3_2,round3_3, round3_4, 
    round3_5,round3_6,round3_7,round3_8,round3_9,round3_10,round3_11,round3_12,
    round3_13,round3_14,round3_15,round3_16,round4_1,round4_2,round4_3,round4_4,round4_5,round4_6,round4_7,round4_8,
    round5_1,round5_2,round5_3,round5_4,round6_1,round6_2,final);

  useEffect(() => {
    
  }, [round2_1, round2_2,round2_3, round2_4, round2_5,round2_6,round2_7,round2_8,round2_9,round2_10,round2_11,round2_12,
    round2_13,round2_14,round2_15,round2_16,round2_17,round2_18,round2_19,round2_20,round2_21,round2_22,round2_23,round2_24,
    round2_25,round2_26,round2_27,round2_28,round2_29,round2_30,round2_31,round2_32,round3_1, round3_2,round3_3, round3_4, 
    round3_5,round3_6,round3_7,round3_8,round3_9,round3_10,round3_11,round3_12,
    round3_13,round3_14,round3_15,round3_16,round4_1,round4_2,round4_3,round4_4,round4_5,round4_6,round4_7,round4_8,
    round5_1,round5_2,round5_3,round5_4,round6_1,round6_2,final]);

  const showModal = () => {setShow(true)}

	const hideModal = () => {setShow(false)}

  useEffect(() => {
    setFinal("");
  }, [round6_1]);

  const filterArr = (group,id) => {
    let r = "";
    let arr = group === 1 ? games.slice(0,8):
              group === 2 ? games.slice(8, 16):
              group === 3 ? games.slice(16, 24):
              group === 4 ? games.slice(24, 31): games;

    arr.forEach((i)=>{
      if(i.teamBid === id){
        console.log(i.teamBid)
        r = i.teamB;
      }
      else if(i.teamAid === id){
        r = i.teamA;
      }
    })
    return r;
  };

  console.log(filterArr(4,16));
  

  return (
    <>
    <header>
      <nav>
        <ul>
          <li><a href="#">Mint</a></li>
          <li><a href="#">Standings</a></li>
        </ul>
      </nav>
      <button>{connected ? "MINT" : "Connect"}</button>
    </header>
    { show && <Modal show={showModal} handleClose={hideModal} /> }
    <div className='tournament'>
      <ul className='round seed'>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_1(games[0].teamAid)}>
          <span>{games[0].teamAid}</span>
          <span>{games[0].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_1(games[0].teamBid)}>
          <span>{games[0].teamBid}</span>
          <span>{games[0].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_2(games[1].teamAid)}>
          <span>{games[1].teamAid}</span>
          <span>{games[1].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_2(games[1].teamBid)}>
          <span>{games[1].teamBid}</span>
          <span>{games[1].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_3(games[2].teamAid)}>
          <span>{games[2].teamAid}</span>
          <span>{games[2].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_3(games[2].teamBid)}>
          <span>{games[2].teamBid}</span>
          <span>{games[2].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=>setRound2_4(games[3].teamAid)}>
          <span>{games[3].teamAid}</span>
          <span>{games[3].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_4(games[3].teamBid)}>
          <span>{games[3].teamBid}</span>
          <span>{games[3].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_5(games[4].teamAid)}>
          <span>{games[4].teamAid}</span>
          <span>{games[4].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_5(games[4].teamBid)}>
          <span>{games[4].teamBid}</span>
          <span>{games[4].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_6(games[5].teamAid)}>
          <span>{games[5].teamAid}</span>
          <span>{games[5].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_6(games[5].teamBid)}>
          <span>{games[5].teamBid}</span>
          <span>{games[5].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_7(games[6].teamAid)}>
          <span>{games[6].teamAid}</span>
          <span>{games[6].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_7(games[6].teamBid)}>
          <span>{games[6].teamBid}</span>
          <span>{games[6].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_8(games[7].teamAid)}>
          <span>{games[7].teamAid}</span>
          <span>{games[7].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_8(games[7].teamBid)}>
          <span>{games[7].teamBid}</span>
          <span>{games[7].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_9(games[8].teamAid)}>
          <span>{games[8].teamAid}</span>
          <span>{games[8].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_9(games[8].teamBid)}>
          <span>{games[8].teamBid}</span>
          <span>{games[8].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_10(games[9].teamAid)}>
          <span>{games[9].teamAid}</span>
          <span>{games[9].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_10(games[9].teamBid)}>
          <span>{games[9].teamBid}</span>
          <span>{games[9].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_11(games[10].teamAid)}>
          <span>{games[10].teamAid}</span>
          <span>{games[10].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_11(games[10].teamBid)}>
          <span>{games[10].teamBid}</span>
          <span>{games[10].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_12(games[11].teamAid)}>
          <span>{games[11].teamAid}</span>
          <span>{games[11].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_12(games[11].teamBid)}>
          <span>{games[11].teamBid}</span>
          <span>{games[11].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_13(games[12].teamAid)}>
          <span>{games[12].teamAid}</span>
          <span>{games[12].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_13(games[12].teamBid)}>
          <span>{games[12].teamBid}</span>
          <span>{games[12].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_14(games[13].teamAid)}>
          <span>{games[13].teamAid}</span>
          <span>{games[13].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_14(games[13].teamBid)}>
          <span>{games[13].teamBid}</span>
          <span>{games[13].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_15(games[14].teamAid)}>
          <span>{games[14].teamAid}</span>
          <span>{games[14].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_15(games[14].teamBid)}>
          <span>{games[14].teamBid}</span>
          <span>{games[14].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> setRound2_16(games[15].teamAid)}>
          <span>{games[15].teamAid}</span>
          <span>{games[15].teamA}</span>
        </li>
        <li className='game game-left game-bottom' onClick={()=> setRound2_16(games[15].teamBid)}>
          <span>{games[15].teamBid}</span>
          <span>{games[15].teamB}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
      </ul>
      <ul className='round round-1'>
        <li className='spacer'>&nbsp;</li>
        <li className=' game game-left game-top' onClick={()=> round2_1 !== "" ? setRound3_1(round2_1) : setRound3_1("")}>{filterArr(1,round2_1)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className=' game game-left game-bottom' onClick={()=> round2_2 !== "" ? setRound3_1(round2_2) : setRound3_1("")}>{filterArr(1,round2_2)}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> round2_3 !== "" ? setRound3_2(round2_3) : setRound3_2("")}>{filterArr(1,round2_3)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className='game game-left game-bottom' onClick={()=> round2_4 !== "" ? setRound3_2(round2_4) : setRound3_2("")}>{filterArr(1,round2_4)}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> round2_5 !== "" ? setRound3_3(round2_5) : setRound3_3("")}>{filterArr(1,round2_5)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className='game game-left game-bottom' onClick={()=> round2_6 !== "" ? setRound3_3(round2_6) : setRound3_3("")}>{filterArr(1,round2_6)}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> round2_7 !== "" ? setRound3_4(round2_7) : setRound3_4("")}>{filterArr(1,round2_7)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className='game game-left game-bottom' onClick={()=> round2_8 !== "" ? setRound3_4(round2_8) : setRound3_4("")}>{filterArr(1,round2_8)}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> round2_9 !== "" ? setRound3_5(round2_9) : setRound3_5("")}>{filterArr(2,round2_9)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className='game game-left game-bottom' onClick={()=> round2_10 !== "" ? setRound3_5(round2_10) : setRound3_5("")}>{filterArr(2,round2_10)}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> round2_11 !== "" ? setRound3_6(round2_11) : setRound3_6("")}>{filterArr(2,round2_11)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className='game game-left game-bottom' onClick={()=> round2_12 !== "" ? setRound3_6(round2_12) : setRound3_6("")}>{filterArr(2,round2_12)}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> round2_13 !== "" ? setRound3_7(round2_13) : setRound3_7("")}>{filterArr(2,round2_13)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className='game game-left game-bottom' onClick={()=> round2_14 !== "" ? setRound3_7(round2_14) : setRound3_7("")}>{filterArr(2,round2_14)}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> round2_15 !== "" ? setRound3_8(round2_15) : setRound3_8("")}>{filterArr(2,round2_15)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className='game game-left game-bottom' onClick={()=> round2_16 !== "" ? setRound3_8(round2_16) : setRound3_8("")}>{filterArr(2,round2_16)}</li>
        <li className='spacer'>&nbsp;</li>
      </ul>
      <ul className='round round-2'>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top'onClick={()=> round3_1 !== "" ? setRound4_1(round3_1) : setRound4_1("")}>{filterArr(1,round3_1)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className='game game-left game-bottom'onClick={()=> round3_2 !== "" ? setRound4_1(round3_2) : setRound4_1("")}>{filterArr(1,round3_2)}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top'onClick={()=> round3_3 !== "" ? setRound4_2(round3_3) : setRound4_2("")}>{filterArr(1,round3_3)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className='game game-left game-bottom'onClick={()=> round3_4 !== "" ? setRound4_2(round3_4) : setRound4_2("")}>{filterArr(1,round3_4)}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top'onClick={()=> round3_5 !== "" ? setRound4_3(round3_5) : setRound4_3("")}>{filterArr(2,round3_5)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className='game game-left game-bottom'onClick={()=> round3_6 !== "" ? setRound4_3(round3_6) : setRound4_3("")}>{filterArr(2,round3_6)}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top'onClick={()=> round3_7 !== "" ? setRound4_4(round3_7) : setRound4_4("")}>{filterArr(2,round3_7)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className='game game-left game-bottom'onClick={()=> round3_8 !== "" ? setRound4_4(round3_8) : setRound4_4("")}>{filterArr(2,round3_8)}</li>
        <li className='spacer'>&nbsp;</li>
      </ul>
      <ul className='round round-3'>
        <li className='spacer'>&nbsp;</li>
        <li className='game ame-left game-top'onClick={()=> round4_1 !== "" ? setRound5_1(round4_1) : setRound5_1("")}>{filterArr(1, round4_1)}</li>
        <li className='game-left spacer region region-right'>South</li>
        <li className='game game-left game-bottom'onClick={()=> round4_2 !== "" ? setRound5_1(round4_2) : setRound5_1("")}>{filterArr(1,round4_2)}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top'onClick={()=> round4_3 !== "" ? setRound5_2(round4_3) : setRound5_2("")}>{filterArr(2,round4_3)}</li>
        <li className='game-left spacer region region-right'>East</li>
        <li className='game game-left game-bottom'onClick={()=> round4_4 !== "" ? setRound5_2(round4_4) : setRound5_2("")}>{filterArr(2,round4_4)}</li>
        <li className='spacer'>&nbsp;</li>
      </ul>
      <ul className='round round-4'>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> round5_1 !== "" ? setRound6_1(round5_1) : setRound6_1("")}>{filterArr(1,round5_1)}</li>
        <li className='game-left spacer'>&nbsp;</li>
        <li className='game game-left game-bottom' onClick={()=> round5_2 !== "" ? setRound6_1(round5_2) : setRound6_1("")}>{filterArr(2,round5_2)}</li>
        <li className='spacer'>&nbsp;</li>
      </ul>
      <ul className='round semi-final'>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-left game-top' onClick={()=> round6_1 !== "" ? setFinal(round6_1) : setFinal("")}>{filterArr(0,round6_1)}</li>
        <li className='spacer'>&nbsp;</li>
      </ul>
      <ul className='round finals'>
        <li className='spacer'>&nbsp;</li>
        <li className='game game final'>{filterArr(0,final)}</li>
        <li className='spacer'>&nbsp;</li>
      </ul>
      <ul className='round semi-final'>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> round6_2 !== "" ? setFinal(round6_2) : setFinal("")}>{filterArr(0,round6_2)}</li>
        <li className='spacer'>&nbsp;</li>
      </ul>
      <ul className='round round-4'>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round5_3 !== "" ? setRound6_2(round5_3) : setRound6_2("")}>{round5_3}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom'onClick={()=> round5_4 !== "" ? setRound6_2(round5_4) : setRound6_2("")}>{round5_4}</li>
        <li className='spacer'>&nbsp;</li>
      </ul>
      <ul className='round round-3'>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round4_5 !== "" ? setRound5_3(round4_5) : setRound5_3("")}>{round4_5}</li>
        <li className='game-right spacer region region-left'>Midwest</li>
        <li className='game game-right game-bottom'onClick={()=> round4_6 !== "" ? setRound5_3(round4_6) : setRound5_3("")}>{round4_6}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round4_7 !== "" ? setRound5_4(round4_7) : setRound5_3("")}>{round4_7}</li>
        <li className='game-right spacer region region-left'>West</li>
        <li className='game game-right game-bottom'onClick={()=> round4_8 !== "" ? setRound5_4(round4_8) : setRound5_3("")}>{round4_8}</li>
        <li className='spacer'>&nbsp;</li>
      </ul>
      <ul className='round round-2'>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round3_9 !== "" ? setRound4_5(round3_9) : setRound4_5("")}>{round3_9}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom'onClick={()=> round3_10 !== "" ? setRound4_5(round3_10) : setRound4_5("")}>{round3_10}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round3_11 !== "" ? setRound4_6(round3_11) : setRound4_6("")}>{round3_11}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom'onClick={()=> round3_12 !== "" ? setRound4_6(round3_12) : setRound4_6("")}>{round3_12}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round3_13 !== "" ? setRound4_7(round3_13) : setRound4_7("")}>{round3_13}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom'onClick={()=> round3_14 !== "" ? setRound4_7(round3_14) : setRound4_7("")}>{round3_14}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round3_15 !== "" ? setRound4_8(round3_15) : setRound4_8("")}>{round3_15}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom'onClick={()=> round3_16 !== "" ? setRound4_8(round3_16) : setRound4_8("")}>{round3_16}</li>
        <li className='spacer'>&nbsp;</li>
      </ul>
      <ul className='round round-1'>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round2_17 !== "" ? setRound3_9(round2_17) : setRound3_9("")}>{round2_17}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom'onClick={()=> round2_18 !== "" ? setRound3_9(round2_18) : setRound3_9("")}>{round2_18}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round2_19 !== "" ? setRound3_10(round2_19) : setRound3_10("")}>{round2_19}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom'onClick={()=> round2_20 !== "" ? setRound3_10(round2_20) : setRound3_10("")}>{round2_20}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round2_21 !== "" ? setRound3_11(round2_21) : setRound3_11("")}>{round2_21}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom'onClick={()=> round2_22 !== "" ? setRound3_11(round2_22) : setRound3_11("")}>{round2_22}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round2_23 !== "" ? setRound3_12(round2_23) : setRound3_12("")}>{round2_23}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom'onClick={()=> round2_24 !== "" ? setRound3_12(round2_24) : setRound3_12("")}>{round2_24}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round2_25 !== "" ? setRound3_13(round2_25) : setRound3_13("")}>{round2_25}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom'onClick={()=> round2_26 !== "" ? setRound3_13(round2_26) : setRound3_13("")}>{round2_26}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round2_27 !== "" ? setRound3_14(round2_27) : setRound3_14("")}>{round2_27}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom'onClick={()=> round2_28 !== "" ? setRound3_14(round2_28) : setRound3_14("")}>{round2_28}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round2_29 !== "" ? setRound3_15(round2_29) : setRound3_15("")}>{round2_29}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom'onClick={()=> round2_30 !== "" ? setRound3_15(round2_30) : setRound3_15("")}>{round2_30}</li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top'onClick={()=> round2_31 !== "" ? setRound3_16(round2_31) : setRound3_16("")}>{round2_31}</li>
        <li className='game-right spacer'>&nbsp;</li>
        <li className='game game-right game-bottom' onClick={()=> round2_32 !== "" ? setRound3_16(round2_32) : setRound3_16("")}>{round2_32}</li>
        <li className='spacer'>&nbsp;</li>
      </ul>
      <ul className='round seed'>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_17(games[16].teamA)}>
          <span>{games[16].teamA}</span>
          <span>{games[16].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_17(games[16].teamB)}>
          <span>{games[16].teamB}</span>
          <span>{games[16].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_18(games[17].teamA)}>
          <span>{games[17].teamA}</span>
          <span>{games[17].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_18(games[17].teamB)}>
          <span>{games[17].teamB}</span>
          <span>{games[17].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_19(games[18].teamA)}>
          <span>{games[18].teamA}</span>
          <span>{games[18].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_19(games[18].teamB)}>
          <span>{games[18].teamB}</span>
          <span>{games[18].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_20(games[19].teamA)}>
          <span>{games[19].teamA}</span>
          <span>{games[19].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_20(games[19].teamB)}>
          <span>{games[19].teamB}</span>
          <span>{games[19].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_21(games[20].teamA)}>
          <span>{games[20].teamA}</span>
          <span>{games[20].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_21(games[20].teamB)}>
          <span>{games[20].teamB}</span>
          <span>{games[20].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_22(games[21].teamA)}>
          <span>{games[21].teamA}</span>
          <span>{games[21].teamAid}</span>
        </li>
        <li className='game game-right game-bottom'onClick={()=> setRound2_22(games[21].teamB)}>
          <span>{games[21].teamB}</span>
          <span>{games[21].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_23(games[22].teamA)}>
          <span>{games[22].teamA}</span>
          <span>{games[22].teamAid}</span>
        </li>
        <li className='game game-right game-bottom'onClick={()=> setRound2_23(games[22].teamB)}>
          <span>{games[22].teamB}</span>
          <span>{games[22].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_24(games[23].teamA)}>
          <span>{games[23].teamA}</span>
          <span>{games[23].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_24(games[23].teamB)}>
          <span>{games[23].teamB}</span>
          <span>{games[23].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_25(games[24].teamA)}>
          <span>{games[24].teamA}</span>
          <span>{games[24].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_25(games[24].teamB)}>
          <span>{games[24].teamB}</span>
          <span>{games[24].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_26(games[25].teamA)}>
          <span>{games[25].teamA}</span>
          <span>{games[25].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_26(games[25].teamB)}>
          <span>{games[25].teamB}</span>
          <span>{games[25].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_27(games[26].teamA)}>
          <span>{games[26].teamA}</span>
          <span>{games[26].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_27(games[26].teamB)}>
          <span>{games[26].teamB}</span>
          <span>{games[26].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_28(games[27].teamA)}>
          <span>{games[27].teamA}</span>
          <span>{games[27].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_28(games[27].teamB)}>
          <span>{games[27].teamB}</span>
          <span>{games[27].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_29(games[28].teamA)}>
          <span>{games[28].teamA}</span>
          <span>{games[28].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_29(games[28].teamB)}>
          <span>{games[28].teamB}</span>
          <span>{games[28].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_30(games[29].teamA)}>
          <span>{games[29].teamA}</span>
          <span>{games[29].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_30(games[29].teamB)}>
          <span>{games[29].teamB}</span>
          <span>{games[29].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_31(games[30].teamA)}>
          <span>{games[30].teamA}</span>
          <span>{games[30].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_31(games[30].teamB)}>
          <span>{games[30].teamB}</span>
          <span>{games[30].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
        <li className='game game-right game-top' onClick={()=> setRound2_32(games[31].teamA)}>
          <span>{games[31].teamA}</span>
          <span>{games[31].teamAid}</span>
        </li>
        <li className='game game-right game-bottom' onClick={()=> setRound2_32(games[31].teamB)}>
          <span>{games[31].teamB}</span>
          <span>{games[31].teamBid}</span>
        </li>
        <li className='spacer'>&nbsp;</li>
      </ul>
    </div>
    </>
  );
}

export default App;
