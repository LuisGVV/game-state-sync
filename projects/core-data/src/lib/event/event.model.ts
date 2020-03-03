export interface Event {
    player_id: number;
    coord_x: number;
    coord_y: number;
    action_name: string;
    action_type: string;
    action_value: number;
}

export interface EventStatistics {
    average_coord_x: number;
    average_coord_y: number;
}
