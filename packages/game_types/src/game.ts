export type Player = {
   characterId: string;
   coins: number;
   finishCards: Record<string, boolean>;
   bettingTickets: BettingTicket[];
   pyramidTickets: number;
};

export type SpectatorTile = {
   type: 'cheer' | 'boo';
   playerNumber: number;
};

export type Square = {
   camelIds: string[];
   spectatorTile?: SpectatorTile;
};

export type Camel = {
   id: string;
   color: string;
   direction: 'forward' | 'backward';
};

export type BettingTicket = {
   color: string;
   first: number;
   second: number;
   neither: number;
};

export type FinishCard = {
   color: string;
   playerNumber: number;
};

export type Die = {
   color: string;
   rolled: boolean;
   sides: Side[];
};

export type Side = {
   color: string;
   value: number;
};

export type GameState = {
   board: Square[];
   camels: Record<string, Camel>;
   players: Player[];
   finishCards: {
      winner: FinishCard[];
      loser: FinishCard[];
   };
   bettingTickets: {
      [color: string]: BettingTicket[];
   };
   dice: Die[];
};

export interface PlayerAction {
   type:
      | 'placeFinishCard'
      | 'pickUpBettingTicket'
      | 'rollDice'
      | 'placeSpectatorTile'
      | 'reset';
   finishCard?: {
      color: string;
      pile: 'winner' | 'loser';
   };
   bettingTicket?: {
      color: string;
   };
   spectatorTile?: {
      squareIndex: number;
      type: 'cheer' | 'boo';
   };
}
