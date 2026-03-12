import { Box, Button, Heading, Image, Input, Text, VStack } from "native-base";
import React, { useState } from "react";
//testimiiii
const GetBMI = () => {
  const [weight, setWeight] = useState(``);
  const [height, setHeight] = useState(``);
  const [status, setStatus] = useState(``);
  const [desc, setDesc] = useState(``);

  const calculateBMI = () => {
    const BMI = weight / ((height / 100) * (height / 100));
    setStatus(BMI.toFixed(1));
    if (BMI < 18.5) {
      setDesc("Underweight");
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      setDesc("Normal");
    } else if (BMI >= 25 && BMI <= 29.9) {
      setDesc("Overweight");
    } else if (BMI >= 30) {
      setDesc("Obese");
    }

    setHeight(``);
    setWeight(``);
  };

  return (
    <Box flex={1} safeAreaTop>
      <Box paddingLeft={4} paddingRight={4}>
        <Heading marginTop={20}>BMI Calculator</Heading>
        <VStack space={5} pt="6">
          <Input
            value={weight}
            onChangeText={(text) => setWeight(text)}
            placeholder="Enter your weight(kg)"
            keyboardType="numeric"
          />
          <Input
            value={height}
            onChangeText={(text) => setHeight(text)}
            placeholder="Enter your height(cm)"
            keyboardType="numeric"
          />
        </VStack>
        <Button onPress={calculateBMI} marginTop={4}>
          Calculate
        </Button>
        <Box marginTop={4}>
          <Text bold>{status}</Text>
          <Text bold>{desc}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default GetBMI;