import Amp1 from "../../../assets/mock-assets/amps/EVHamp.jpg";
import Amp2 from "../../../assets/mock-assets/amps/fenderamp1.jpg";
import Amp3 from "../../../assets/mock-assets/amps/marshall1.webp";
import Amp4 from "../../../assets/mock-assets/amps/matchless.jpeg";
import Amp5 from "../../../assets/mock-assets/amps/mesaamp1.webp";

import Bass1 from "../../../assets/mock-assets/basses/ernieballbass.jpg"
import Bass2 from "../../../assets/mock-assets/basses/ernieballbass2.webp"
import Bass3 from "../../../assets/mock-assets/basses/fenderbass.jpg"
import Bass4 from "../../../assets/mock-assets/basses/ibanez.jpg"
import Bass5 from "../../../assets/mock-assets/basses/mayonesbass1.jfif"
import Bass6 from "../../../assets/mock-assets/basses/mayonesbass2.jpg"
import Bass7 from "../../../assets/mock-assets/basses/warwickbass.jpg"

import Guitar1 from "../../../assets/mock-assets/guitars/aristides2.jfif"
import Guitar2 from "../../../assets/mock-assets/guitars/tele.webp"
import Guitar3 from "../../../assets/mock-assets/guitars/kiesel.jfif"
import Guitar4 from "../../../assets/mock-assets/guitars/kiesel2.jfif"
import Guitar5 from "../../../assets/mock-assets/guitars/kiesel3.jfif"
import Guitar6 from "../../../assets/mock-assets/guitars/mayones1.jpg"
import Guitar7 from "../../../assets/mock-assets/guitars/relish.jpg"

import Pedal1 from "../../../assets/mock-assets/pedals/avalancherun.jpg"
import Pedal2 from "../../../assets/mock-assets/pedals/bigsky.jfif"
import Pedal3 from "../../../assets/mock-assets/pedals/dba.jpg"
import Pedal4 from "../../../assets/mock-assets/pedals/hizumitas.jpg"
import Pedal5 from "../../../assets/mock-assets/pedals/lvx.webp"
import Pedal6 from "../../../assets/mock-assets/pedals/mood.webp"
import Pedal7 from "../../../assets/mock-assets/pedals/ottobit.webp"
import Pedal8 from "../../../assets/mock-assets/pedals/polymoon.jfif"
import Pedal9 from "../../../assets/mock-assets/pedals/sunnnn.jfif"

import Perc1 from "../../../assets/mock-assets/percussion/IMG_1693_2000x.webp"
import Perc2 from "../../../assets/mock-assets/percussion/meinl.jfif"
import Perc3 from "../../../assets/mock-assets/percussion/pen_SUPERSTAR-CLASSIC2022.png"
import Perc4 from "../../../assets/mock-assets/percussion/tom.jpg"

import Rec1 from "../../../assets/mock-assets/recording/apollo-twin-x-quad-with-cable.jpg"
import Rec2 from "../../../assets/mock-assets/recording/interface.webp"
import Rec3 from "../../../assets/mock-assets/recording/microphone1.jfif"
import Rec4 from "../../../assets/mock-assets/recording/microphone2.jpg"
import Rec5 from "../../../assets/mock-assets/recording/monitor.jfif"
import Rec6 from "../../../assets/mock-assets/recording/neumann.jpg"
import Rec7 from "../../../assets/mock-assets/recording/SDRK.webp"
import Rec8 from "../../../assets/mock-assets/recording/sm7b.jfif"

import Syn1 from "../../../assets/mock-assets/synths/modular.png"
import Syn2 from "../../../assets/mock-assets/synths/OP-1_Sequencer_Concept.png"
const RandomCategoryImage = (categoryId) => {
  // amps
  const amps = [Amp1, Amp2, Amp3, Amp4, Amp5]
  // basses
  const basses = [Bass1, Bass2, Bass3, Bass4, Bass5, Bass6, Bass7]
  // guitars
  const guitars = [Guitar1, Guitar2, Guitar3, Guitar4, Guitar5, Guitar6, Guitar7]
  // pedals
  const pedals = [Pedal1, Pedal2, Pedal3, Pedal4, Pedal5, Pedal6, Pedal7, Pedal8, Pedal9]
  // percussion
  const percs = [Perc1, Perc2, Perc3, Perc4]
  // proaudio
  const pros = [Rec1, Rec2, Rec3, Rec4, Rec5, Rec6, Rec7, Rec8]
  // recording
  const recs = [Syn1, Syn2]

  let image

  switch (categoryId) {
    case 1: 
      image = guitars[Math.floor(Math.random()*(guitars.length - 1))]
      break;
    case 2: 
      image = basses[Math.floor(Math.random()*(basses.length - 1))]
      break;
    case 3: 
      image = pedals[Math.floor(Math.random()*(pedals.length - 1))]
      break;
    case 4: 
      image = amps[Math.floor(Math.random()*(amps.length - 1))]
      break;
    case 5: 
      image = recs[Math.floor(Math.random()*(recs.length - 1))]
      break;
    case 6: 
      image = percs[Math.floor(Math.random()*(percs.length - 1))]
      break;
    case 7: 
      image = pros[Math.floor(Math.random()*(pros.length - 1))]
      break;
    case 8: 
      image = pros[Math.floor(Math.random()*(pros.length - 1))]
      break;
    default:
      break;
    
  }

  return(
    image
  )
}

export default RandomCategoryImage