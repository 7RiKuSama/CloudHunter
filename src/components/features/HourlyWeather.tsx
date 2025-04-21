import { Link, Tabs } from "@chakra-ui/react";
import { Colors } from "../../theme/themeInstance";
import MainContext from "../../Contexts/MainContext";
import { useContext, useState } from "react";
import AreaChartLayout from "../common/charts/AreaChart";

const HourlyWeather = () => {
  const { theme, plotData } = useContext(MainContext);
  const [selected, setSelected] = useState("temperature");

  // Display names mapped to their keys in plotData
  const options: { label: string; key: keyof typeof plotData }[] = [
    { label: "Temperature", key: "temperature" },
    { label: "Humidity", key: "humidity" },
    { label: "Rain Pattern", key: "rainPattern" },
    { label: "Wind", key: "wind" },
    { label: "UV Index", key: "uvIndex" },
    { label: "Precipitation", key: "precipitation" },
  ];

  return (
    <Tabs.Root
      variant="subtle"
      orientation="vertical"
      value={selected}
      onValueChange={({ value }) => setSelected(value)}
    >
      <Tabs.List
        p={2}
        mr={2}
        w={"20%"}
        bg={theme.boxBg}
        borderRadius={"5px"}
        borderRight={`1px solid ${theme.borderColor}`}
      >
        {options.map(({ label, key }) => (
          <Tabs.Trigger
            key={label}
            value={key as string}
            asChild
            _selected={{ color: "white", bg: Colors.hoverDark }}
            color={theme.color}
            background="transparent"
            outline="transparent"
            p={2}
          >
            <Link
              unstyled
              style={{ textAlign: "center" }}
              href={`#${String(key)}`}
            >
              {label}
            </Link>
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {options.map(({ key }) => (
        <Tabs.Content
          key={key as string}
          value={key as string}
          style={{ height: "350px", width: "100%" }}
        >
          <AreaChartLayout dataChart={plotData[key] || []} />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default HourlyWeather;
