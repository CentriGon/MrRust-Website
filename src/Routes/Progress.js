import { NavBar } from "../Components/NavBar"
import "../Styles/Progress.css"
import { ProgressBox } from "../Components/ProgressBox"

export const Progress = () => {



    return <div className="progress">
        <NavBar />
        <h1> Progress</h1>
        <div className="entries">
        <ProgressBox
        Noor="Drew prototype design, researched rust removal methods"
        David="Researched abrasive materials, galvanization, electroplating, helped with the prototype design, and researched iron/rust"
        Ryan="Researched rust, worked on the 'Rusting Parts Research' section"
        date="September 5th, 2023"
        key={1}
      />
      <ProgressBox
        Noor="Researched statistics for amounts of fasteners, fastener materials, as well as possible methods for vibrating things."
        David="Researched tumblers as a potential means of moving the rust removal compartment"
        Ryan="Progress"
        date="September 6th, 2023"
        key={2}
      />
      <ProgressBox
        Noor="Worked on prototype and presented, pasted pictures"
        David="Worked on prototype and presented, worked on time log"
        Ryan="Worked on prototype and presented, noted down comments"
        date="September 12th, 2023"
        key={3}
      />
      <ProgressBox
        Noor="Listed components and targets for our device"
        David="Listed components and created diagram of our device"
        Ryan="Wrote description of the functionality of the device"
        date="September 14th, 2023"
        key={4}
      />
      <ProgressBox
        Noor="Revised targets for project agreement"
        David="Researched light sensors and embedded systems"
        Ryan="Revised project agreement, combining it with the old agreement."
        date="September 19th, 2023"
        key={5}
      />
      <ProgressBox
        Noor="Updated the time log, found a potential blasting media, looked for different blasting nozzles as well as air compressors"
        David="Created code for the light sensor"
        Ryan="Updated the project component list, Looked for materials to use for the blasting chamber, looked for materials for the chassis"
        date="September 21st, 2023"
        key={6}
      />
      <ProgressBox
        Noor="Researched air compressors, updated component list"
        David="Research raspberry pi’s, updated component list"
        Ryan="Research Miscellaneous parts, updated component list"
        date="September 26th, 2023"
        key={6}
      />
      <ProgressBox
        Noor="Perused current components in supplies cabinet, researched air compressors further"
        David="Perused current components in supplies cabinet, researched camera modules, began c++ file for code"
        Ryan="Perused current components in supplies cabinet, updated parts on component list, created order form"
        date="September 28th, 2023"
        key={8}
      />
      <ProgressBox
        Noor="Helped Ryan fill out the order form, updated the time log, found the diameter of the air compressor nozzle and found corresponding tubes"
        David="Researched raspberry pi camera module as well as python libraries for coding the camera module."
        Ryan="Researched pneumatic tubing and worked on the order form"
        date="October 3rd, 2023"
        key={9}
      />
      <ProgressBox
        Noor="Worked on Background Research Summary"
        David="Worked on Background Research Summary"
        Ryan="Worked on Background Research Summary"
        date="October 9th, 2023"
        key={10}
      />
      <ProgressBox
        Noor="Met with Mr. Nick and researched more into Raspberry Pi"
        David="Met with Mr. Nick and researched more into Raspberry Pi"
        Ryan="Fine-tuned the supply order form"
        date="October 10th, 2023"
        key={11}
      />
      <ProgressBox
        Noor="Met with Mr. Nick to finalize supply order form, started brainstorming for collaboration"
        David="Met with Mr. Nick to finalize supply order form"
        Ryan="Fine-tuned the supply order form, started brainstorming for collaboration"
        date="October 12th, 2023"
        key={12}
      />
      <ProgressBox
        Noor="Updating the supply order for; looking for collaborative partners"
        David="Updating the supply order form"
        Ryan="Updating the supply order form"
        date="October 17th, 2023"
        key={13}
      />
      <ProgressBox
        Noor="Updated supply order form hopefully for the final time"
        David="Worked on setting raspberry pi up"
        Ryan="Technical Drawing"
        date="October 19th, 2023"
        key={14}
      />
      <ProgressBox
        Noor="Worked on collaboration plan"
        David="Worked on coding with raspberry pi"
        Ryan="Work on CAD design"
        date="October 24th, 2023"
        key={15}
      />
      <ProgressBox
        Noor="Acquired necessary things from item storage, searched for new air nozzle"
        David="Worked on coding with raspberry pi and coding component assignment"
        Ryan="Acquired necessary things from item storage, helped with coding raspberry"
        date="October 26th, 2023"
        key={16}
      />
      <ProgressBox
        Noor="Received the sheet metal and began cutting the pieces of the machine’s frame"
        David="Figuring out how the wires connect to the Raspberry Pi"
        Ryan="Marked down the sections David had to cut out for the frame"
        date="October 31st, 2023"
        key={17}
      />
      <ProgressBox
        Noor="Continued cutting out the pieces for the frame, dremeled out a piece of metal to make the opening for the door"
        David="Fixed motor"
        Ryan="Marked out more pieces for David to cut out, numbered pieces of the cut-out metal so the position for each piece is known"
        date="November 2nd, 2023"
        key={18}
      />
      <ProgressBox
        Noor="Stretched out the folds that came with the sheets of metal, dremeled out a small piece of metal needed for the frame"
        David="Connected motor driver"
        Ryan="Started to assemble the sandblasting chamber"
        date="November 9th, 2023"
        key={19}
      />
      <ProgressBox
        Noor="Dremeled another piece for the exit door, helped Ryan attach more pieces to the sandblasting chamber"
        David="Coding"
        Ryan="Assembled the basket for the fasteners, hinged it to the door"
        date="November 14th, 2023"
        key={20}
      />
      <ProgressBox
        Noor="Working on updating the time log for the last 2 weeks, helped Ryan with the sandblasting chamber"
        David="Discovering how to attach the wires for the Raspberry Pi to the relay"
        Ryan="Drilled holes into the sandblasting compartment, attached interior door"
        date="November 16th, 2023"
        key={21}
      />
      <ProgressBox
        Noor="Worked on wiring the components of the relay, got relay to work, need to hook it up with raspberry pi"
        David="Screwed the screws used to attach the ramp to the sandblasting chamber."
        Ryan="Attached air nozzles to sandblasting chamber"
        date="November 21st, 2023"
      />
      <ProgressBox
        Noor="Got relay hooked up with raspberry pi"
        David="Started helping with the dunking mechanism"
        Ryan="Started dunking mechanism"
        date="November 28th, 2023"
      />
      <ProgressBox
        Noor="Added program to list of boot up programs on raspberry pi so that it turns on when the raspberry pi runs"
        David="Helped set up the dunking system and added the motors"
        Ryan="Continued working on dunking mechanism"
        date="November 30th, 2023"
      />
      <ProgressBox
        Noor="Website"
        David="Cut out the frame and bent the edges to put it into a workable frame."
        Ryan="Secured sandblasting chamber, finished assembling dunking contraption, and added exterior doors"
        date="December 2nd, 2023"
      />
      <ProgressBox
        Noor="Website"
        David="Helped connect the nozzles into the frame"
        Ryan="Worked on preparing machine for sealing and final assembly"
        date="December 3rd, 2023"
      />
      <ProgressBox
        Noor="Worked on timing code"
        David="Connected air compressor to nozzle, put together all of the components in the frame"
        Ryan="Helped to prepare device for electrical components"
        date="December 5th, 2023"
      />
      <ProgressBox
        Noor="Adjusted code according to testing"
        David="Helped put together device and troubleshooted air compressor"
        Ryan="Helped put together device and made small adjustments"
        date="December 7th, 2023"
      />
      <ProgressBox
        Noor="Met to seal, test, and record final contraption"
        David="Met to seal, test, and record final contraption"
        Ryan="Met to seal, test, and record final contraption"
        date="December 9th, 2023"
      />
      <div className="last-line"></div>
        </div>
    </div>
}
