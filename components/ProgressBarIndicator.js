import React from 'react'
import { View } from 'react-native';
import Svg, { Rect } from "react-native-svg";

const ProgressBarIndicator = ({ progress }) => {
    const barWidth = 300;
    const progressWidth = (progress / 100) * barWidth;
    return (
        <View>
            <Svg width={barWidth} height="10">
                <Rect
                    width={barWidth}
                    height={"100%"}
                    fill={"rgba(183, 229, 228, 1)"}
                    rx={3.5}
                    ry={3.5}
                />
                <Rect
                    width={progressWidth}
                    height={"100%"}
                    fill={"rgba(243, 175, 142, 1)"}
                    rx={3.5}
                    ry={3.5}
                />
            </Svg>
        </View>
    );
}

export default ProgressBarIndicator;