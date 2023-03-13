import React, { useState } from 'react';
import games from "./games";
import './App.css';

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
  

  return (
    <section id="bracket">
      <div class="container">
        <div class="split split-one">
          <div class="round round-one current">
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_1(games[0].teamA)}>Duke<span class="score">76</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_1(games[0].teamB)}>Virginia<span class="score">82</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_2(games[1].teamA)}>Wake Forest<span class="score">64</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_2(games[1].teamB)}>Clemson<span class="score">56</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_3(games[2].teamA)}>North Carolina<span class="score">68</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_3(games[2].teamB)}>Florida State<span class="score">54</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_4(games[3].teamA)}>NC State<span class="score">74</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_4(games[3].teamB)}>Maryland<span class="score">92</span></li>
            </ul>     
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_5(games[4].teamA)}>Georgia Tech<span class="score">78</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_5(games[4].teamB)}>Georgia<span class="score">80</span></li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_6(games[5].teamA)}>Auburn<span class="score">64</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_6(games[5].teamB)}>Florida<span class="score">63</span></li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_7(games[6].teamA)}>Kentucky<span class="score">70</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_7(games[6].teamB)}>Alabama<span class="score">59</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_8(games[7].teamA)}>Vanderbilt<span class="score">64</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_8(games[7].teamB)}>Gonzaga<span class="score">68</span></li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_9(games[8].teamA)}>Duke<span class="score">76</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_9(games[8].teamB)}>Virginia<span class="score">82</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_10(games[9].teamA)}>Wake Forest<span class="score">64</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_10(games[9].teamB)}>Clemson<span class="score">56</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_11(games[10].teamA)}>North Carolina<span class="score">68</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_11(games[10].teamB)}>Florida State<span class="score">54</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_12(games[11].teamA)}>NC State<span class="score">74</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_12(games[11].teamB)}>Maryland<span class="score">92</span></li>
            </ul>     
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_13(games[12].teamA)}>Georgia Tech<span class="score">78</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_13(games[12].teamB)}>Georgia<span class="score">80</span></li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_14(games[13].teamA)}>Auburn<span class="score">64</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_14(games[13].teamB)}>Florida<span class="score">63</span></li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_15(games[14].teamA)}>Kentucky<span class="score">70</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_15(games[14].teamB)}>Alabama<span class="score">59</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_16(games[15].teamA)}>Vanderbilt<span class="score">64</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_16(games[15].teamB)}>Gonzaga<span class="score">68</span></li>
            </ul>                  
          </div>
          <div class="round round-two">
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round2_1 !== "" ? setRound3_1(round2_1) : setRound3_1("")}>{round2_1}</li>
              <li class="team team-bottom" onClick={()=> round2_2 !== "" ? setRound3_1(round2_2) : setRound3_1("")}>{round2_2}</li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round2_3 !== "" ? setRound3_2(round2_3) : setRound3_2("")}>{round2_3}</li>
              <li class="team team-bottom" onClick={()=> round2_4 !== "" ? setRound3_2(round2_4) : setRound3_2("")}>{round2_4}</li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round2_5 !== "" ? setRound3_3(round2_5) : setRound3_3("")}>{round2_5}</li>
              <li class="team team-bottom" onClick={()=> round2_6 !== "" ? setRound3_3(round2_6) : setRound3_3("")}>{round2_6}</li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round2_7 !== "" ? setRound3_4(round2_7) : setRound3_4("")}>{round2_7}</li>
              <li class="team team-bottom" onClick={()=> round2_8 !== "" ? setRound3_4(round2_8) : setRound3_4("")}>{round2_8}</li>
            </ul>
            <ul class="matchup">
            <li class="team team-top" onClick={()=> round2_9 !== "" ? setRound3_5(round2_9) : setRound3_5("")}>{round2_9}</li>
            <li class="team team-bottom" onClick={()=> round2_10 !== "" ? setRound3_5(round2_10) : setRound3_5("")}>{round2_10}</li>
            </ul> 
            <ul class="matchup">
            <li class="team team-top" onClick={()=> round2_11 !== "" ? setRound3_6(round2_11) : setRound3_6("")}>{round2_11}</li>
            <li class="team team-bottom" onClick={()=> round2_12 !== "" ? setRound3_6(round2_12) : setRound3_6("")}>{round2_12}</li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round2_13 !== "" ? setRound3_7(round2_13) : setRound3_7("")}>{round2_13}</li>
              <li class="team team-bottom" onClick={()=> round2_14 !== "" ? setRound3_7(round2_14) : setRound3_7("")}>{round2_14}</li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round2_15 !== "" ? setRound3_8(round2_15) : setRound3_8("")}>{round2_15}</li>
              <li class="team team-bottom" onClick={()=> round2_16 !== "" ? setRound3_8(round2_16) : setRound3_8("")}>{round2_16}</li>
            </ul>                   
          </div>
          
          <div class="round round-three">
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round3_1 !== "" ? setRound4_1(round3_1) : setRound4_1("")}>{round3_1}</li>
              <li class="team team-bottom" onClick={()=> round3_2 !== "" ? setRound4_1(round3_2) : setRound4_1("")}>{round3_2}</li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round3_3 !== "" ? setRound4_2(round3_3) : setRound4_2("")}>{round3_3}</li>
              <li class="team team-bottom" onClick={()=> round3_4 !== "" ? setRound4_2(round3_4) : setRound4_2("")}>{round3_4}</li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round3_5 !== "" ? setRound4_3(round3_5) : setRound4_3("")}>{round3_5}</li>
              <li class="team team-bottom" onClick={()=> round3_6 !== "" ? setRound4_3(round3_6) : setRound4_3("")}>{round3_6}</li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round3_7 !== "" ? setRound4_4(round3_7) : setRound4_4("")}>{round3_7}</li>
              <li class="team team-bottom" onClick={()=> round3_8 !== "" ? setRound4_4(round3_8) : setRound4_4("")}>{round3_8}</li>
            </ul>                  
          </div>
        </div> 
      
        <div class="champion">
            <ul class ="matchup">
              <li class="team team-top" onClick={()=> round4_1 !== "" ? setRound5_1(round4_1) : setRound5_1("")}>{round4_1}</li>
              <li class="team team-bottom" onClick={()=> round4_2 !== "" ? setRound5_1(round4_2) : setRound5_1("")}>{round4_2}</li>
            </ul> 
            <ul class ="matchup">
              <li class="team team-top" onClick={()=> round4_3 !== "" ? setRound5_2(round4_3) : setRound5_2("")}>{round4_3}</li>
              <li class="team team-bottom" onClick={()=> round4_4 !== "" ? setRound5_2(round4_4) : setRound5_2("")}>{round4_4}</li>
            </ul>
        </div>
        
        <div class="champion">
          <div class="final">
            <ul class ="matchup championship">
              <li class="team team-top">{round5_1}</li>
              <li class="team team-bottom">{round5_2}</li>
            </ul>
          </div>
        </div>
        <div class="champion">
          <div class="final">
            <ul class ="matchup championship">
              <li class="team team-top"></li>
              <li class="team team-bottom"></li>
            </ul>
          </div>
        </div>
        <div class="champion">
          <div class="final">
            <ul class ="matchup championship">
              <li class="team team-top">{round5_3}</li>
              <li class="team team-bottom">{round5_4}</li>
            </ul>
          </div>
        </div>

        <div class="champion">
        <ul class ="matchup">
          <li class="team team-top" onClick={()=> round4_5 !== "" ? setRound5_3(round4_5) : setRound5_3("")}>{round4_5}</li>
          <li class="team team-bottom" onClick={()=> round4_6 !== "" ? setRound5_3(round4_6) : setRound5_3("")}>{round4_6}</li>
        </ul> 
        <ul class ="matchup">
          <li class="team team-top" onClick={()=> round4_7 !== "" ? setRound5_4(round4_7) : setRound5_4("")}>{round4_7}</li>
          <li class="team team-bottom" onClick={()=> round4_8 !== "" ? setRound5_4(round4_8) : setRound5_4("")}>{round4_8}</li>
        </ul>  
        </div>
      
      
        <div class="split split-two">
      
      
          <div class="round round-three">
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round3_9 !== "" ? setRound4_5(round3_9) : setRound4_5("")}>{round3_9}</li>
              <li class="team team-bottom" onClick={()=> round3_10 !== "" ? setRound4_5(round3_10) : setRound4_5("")}>{round3_10}</li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round3_11 !== "" ? setRound4_6(round3_11) : setRound4_6("")}>{round3_11}</li>
              <li class="team team-bottom" onClick={()=> round3_12 !== "" ? setRound4_6(round3_12) : setRound4_6("")}>{round3_12}</li>
            </ul>  
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round3_13 !== "" ? setRound4_7(round3_13) : setRound4_7("")}>{round3_13}</li>
              <li class="team team-bottom" onClick={()=> round3_14 !== "" ? setRound4_7(round3_14) : setRound4_7("")}>{round3_14}</li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round3_15 !== "" ? setRound4_8(round3_15) : setRound4_8("")}>{round3_15}</li>
              <li class="team team-bottom" onClick={()=> round3_16 !== "" ? setRound4_8(round3_16) : setRound4_8("")}>{round3_16}</li>
            </ul>                 
          </div>
      
          <div class="round round-two">
          <ul class="matchup">
              <li class="team team-top" onClick={()=> round2_17 !== "" ? setRound3_9(round2_17) : setRound3_9("")}>{round2_17}</li>
              <li class="team team-bottom" onClick={()=> round2_18 !== "" ? setRound3_9(round2_18) : setRound3_9("")}>{round2_18}</li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round2_19 !== "" ? setRound3_10(round2_19) : setRound3_10("")}>{round2_19}</li>
              <li class="team team-bottom" onClick={()=> round2_20 !== "" ? setRound3_10(round2_20) : setRound3_10("")}>{round2_20}</li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round2_21 !== "" ? setRound3_11(round2_21) : setRound3_11("")}>{round2_21}</li>
              <li class="team team-bottom" onClick={()=> round2_22 !== "" ? setRound3_11(round2_22) : setRound3_11("")}>{round2_22}</li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round2_23 !== "" ? setRound3_12(round2_23) : setRound3_12("")}>{round2_23}</li>
              <li class="team team-bottom" onClick={()=> round2_24 !== "" ? setRound3_12(round2_24) : setRound3_12("")}>{round2_24}</li>
            </ul>
            <ul class="matchup">
            <li class="team team-top" onClick={()=> round2_25 !== "" ? setRound3_13(round2_25) : setRound3_13("")}>{round2_25}</li>
            <li class="team team-bottom" onClick={()=> round2_26 !== "" ? setRound3_13(round2_26) : setRound3_13("")}>{round2_26}</li>
            </ul> 
            <ul class="matchup">
            <li class="team team-top" onClick={()=> round2_27 !== "" ? setRound3_14(round2_27) : setRound3_14("")}>{round2_27}</li>
            <li class="team team-bottom" onClick={()=> round2_28 !== "" ? setRound3_14(round2_28) : setRound3_14("")}>{round2_28}</li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round2_29 !== "" ? setRound3_15(round2_29) : setRound3_15("")}>{round2_29}</li>
              <li class="team team-bottom" onClick={()=> round2_30 !== "" ? setRound3_15(round2_30) : setRound3_15("")}>{round2_30}</li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> round2_31 !== "" ? setRound3_16(round2_31) : setRound3_16("")}>{round2_31}</li>
              <li class="team team-bottom" onClick={()=> round2_32 !== "" ? setRound3_16(round2_32) : setRound3_16("")}>{round2_32}</li>
            </ul>                   
          </div>
          <div class="round round-one current">
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_17(games[16].teamA)}>Duke<span class="score">76</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_17(games[16].teamB)}>Virginia<span class="score">82</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_18(games[17].teamA)}>Wake Forest<span class="score">64</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_18(games[17].teamA)}>Clemson<span class="score">56</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_19(games[18].teamA)}>North Carolina<span class="score">68</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_19(games[18].teamB)}>Florida State<span class="score">54</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_20(games[19].teamA)}>NC State<span class="score">74</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_20(games[19].teamB)}>Maryland<span class="score">92</span></li>
            </ul>     
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_21(games[20].teamA)}>Georgia Tech<span class="score">78</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_21(games[20].teamB)}>Georgia<span class="score">80</span></li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_22(games[21].teamA)}>Auburn<span class="score">64</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_22(games[21].teamB)}>Florida<span class="score">63</span></li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_23(games[22].teamA)}>Kentucky<span class="score">70</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_23(games[22].teamB)}>Alabama<span class="score">59</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_24(games[23].teamA)}>Vanderbilt<span class="score">64</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_24(games[23].teamB)}>Gonzaga<span class="score">68</span></li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_25(games[24].teamA)}>Duke<span class="score">76</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_25(games[24].teamB)}>Virginia<span class="score">82</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_26(games[25].teamA)}>Wake Forest<span class="score">64</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_26(games[25].teamB)}>Clemson<span class="score">56</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_27(games[26].teamA)}>North Carolina<span class="score">68</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_27(games[26].teamB)}>Florida State<span class="score">54</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_28(games[27].teamA)}>NC State<span class="score">74</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_28(games[27].teamB)}>Maryland<span class="score">92</span></li>
            </ul>     
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_29(games[28].teamA)}>Georgia Tech<span class="score">78</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_29(games[28].teamB)}>Georgia<span class="score">80</span></li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_30(games[29].teamA)}>Auburn<span class="score">64</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_30(games[29].teamB)}>Florida<span class="score">63</span></li>
            </ul> 
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_31(games[30].teamA)}>Kentucky<span class="score">70</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_31(games[30].teamB)}>Alabama<span class="score">59</span></li>
            </ul>
            <ul class="matchup">
              <li class="team team-top" onClick={()=> setRound2_32(games[31].teamA)}>Vanderbilt<span class="score">64</span></li>
              <li class="team team-bottom" onClick={()=> setRound2_32(games[31].teamB)}>Gonzaga<span class="score">68</span></li>
            </ul>                  
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
