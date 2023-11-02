import React from "react";
import {Modal} from "../Modal";

interface BowlGame {
    setActivity: (arg: string) => void,
    setTaskDone: (i: number) => void,
}
export const BowlGame : React.FC<BowlGame> = () => {
  return(
      <Modal>
          <div>
              Ням
          </div>
      </Modal>
  )
}