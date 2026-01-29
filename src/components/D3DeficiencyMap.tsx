import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import indiaMapImage from '@/assets/india-tricolor-map.png';

interface StateData {
  name: string;
  deficiencyRate: number;
  population: string;
  majorCities: string[];
  color: string;
}

const stateData: { [key: string]: StateData } = {
  'delhi': {
    name: 'Delhi',
    deficiencyRate: 92,
    population: '3.2 Crores',
    majorCities: ['New Delhi', 'Gurgaon', 'Noida'],
    color: '#8B0000'
  },
  'mumbai': {
    name: 'Maharashtra',
    deficiencyRate: 88,
    population: '12.4 Crores',
    majorCities: ['Mumbai', 'Pune', 'Nagpur'],
    color: '#A52A2A'
  },
  'kolkata': {
    name: 'West Bengal',
    deficiencyRate: 85,
    population: '9.1 Crores',
    majorCities: ['Kolkata', 'Howrah', 'Durgapur'],
    color: '#CD5C5C'
  },
  'chennai': {
    name: 'Tamil Nadu',
    deficiencyRate: 75,
    population: '7.6 Crores',
    majorCities: ['Chennai', 'Coimbatore', 'Madurai'],
    color: '#F08080'
  },
  'bangalore': {
    name: 'Karnataka',
    deficiencyRate: 78,
    population: '6.7 Crores',
    majorCities: ['Bengaluru', 'Mysuru', 'Hubli'],
    color: '#E9967A'
  },
  'hyderabad': {
    name: 'Telangana',
    deficiencyRate: 82,
    population: '3.9 Crores',
    majorCities: ['Hyderabad', 'Warangal', 'Nizamabad'],
    color: '#BC8F8F'
  },
  'punjab': {
    name: 'Punjab',
    deficiencyRate: 65,
    population: '3.0 Crores',
    majorCities: ['Chandigarh', 'Ludhiana', 'Amritsar'],
    color: '#DDA0DD'
  },
  'rajasthan': {
    name: 'Rajasthan',
    deficiencyRate: 58,
    population: '7.8 Crores',
    majorCities: ['Jaipur', 'Jodhpur', 'Udaipur'],
    color: '#D8BFD8'
  },
  'gujarat': {
    name: 'Gujarat',
    deficiencyRate: 72,
    population: '6.3 Crores',
    majorCities: ['Ahmedabad', 'Surat', 'Vadodara'],
    color: '#F0E68C'
  },
  'kerala': {
    name: 'Kerala',
    deficiencyRate: 80,
    population: '3.5 Crores',
    majorCities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode'],
    color: '#FFB6C1'
  }
};

const D3DeficiencyMap = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const getDeficiencyColor = (rate: number) => {
    if (rate >= 85) return '#8B0000'; // Dark Red - Very High
    if (rate >= 75) return '#CD5C5C'; // Red - High  
    if (rate >= 65) return '#F08080'; // Light Red - Moderate
    if (rate >= 55) return '#DDA0DD'; // Purple - Low
    return '#98FB98'; // Light Green - Very Low
  };

  const getLegendItems = () => [
    { color: '#8B0000', label: 'Very High (85%+)', range: '85-95%' },
    { color: '#CD5C5C', label: 'High (75-84%)', range: '75-84%' },
    { color: '#F08080', label: 'Moderate (65-74%)', range: '65-74%' },
    { color: '#DDA0DD', label: 'Low (55-64%)', range: '55-64%' },
    { color: '#98FB98', label: 'Very Low (<55%)', range: '<55%' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <Card className="p-6 border-primary/20 shadow-soft">
            <div className="relative">
              {/* India SVG Map with Proper Outline */}
              <svg
                viewBox="0 0 1000 800"
                className="w-full h-auto max-h-96"
              >
                {/* India Map Background Image */}
                <defs>
                  <pattern id="indiaMapPattern" patternUnits="userSpaceOnUse" width="1000" height="800">
                    <image 
                      href={indiaMapImage} 
                      x="50" 
                      y="0" 
                      width="900" 
                      height="800" 
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </pattern>
                </defs>
                <rect width="1000" height="800" fill="url(#indiaMapPattern)"/>
                
                {/* Indian States with Proper Outlines */}
                <g>
                  {/* Rajasthan */}
                  <path
                    d="M180 200 L280 180 L350 200 L380 250 L360 320 L300 340 L220 330 L180 280 Z"
                    fill={getDeficiencyColor(stateData.rajasthan.deficiencyRate)}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:stroke-primary hover:stroke-4 transition-all"
                    onMouseEnter={() => setHoveredState('rajasthan')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('rajasthan')}
                  />
                  
                  {/* Gujarat */}
                  <path
                    d="M100 280 L180 270 L200 320 L180 380 L120 390 L90 340 Z"
                    fill={getDeficiencyColor(stateData.gujarat.deficiencyRate)}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:stroke-primary hover:stroke-4 transition-all"
                    onMouseEnter={() => setHoveredState('gujarat')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('gujarat')}
                  />
                  
                  {/* Maharashtra */}
                  <path
                    d="M220 330 L360 320 L400 350 L420 400 L380 440 L300 450 L240 420 L200 380 Z"
                    fill={getDeficiencyColor(stateData.mumbai.deficiencyRate)}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:stroke-primary hover:stroke-4 transition-all"
                    onMouseEnter={() => setHoveredState('mumbai')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('mumbai')}
                  />
                  
                  {/* Karnataka */}
                  <path
                    d="M300 450 L380 440 L420 480 L400 540 L350 560 L300 550 L280 500 Z"
                    fill={getDeficiencyColor(stateData.bangalore.deficiencyRate)}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:stroke-primary hover:stroke-4 transition-all"
                    onMouseEnter={() => setHoveredState('bangalore')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('bangalore')}
                  />
                  
                  {/* Kerala */}
                  <path
                    d="M280 550 L320 570 L310 620 L280 650 L260 640 L250 600 L260 560 Z"
                    fill={getDeficiencyColor(stateData.kerala.deficiencyRate)}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:stroke-primary hover:stroke-4 transition-all"
                    onMouseEnter={() => setHoveredState('kerala')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('kerala')}
                  />
                  
                  {/* Tamil Nadu */}
                  <path
                    d="M350 560 L450 550 L480 580 L470 620 L420 650 L380 640 L350 600 Z"
                    fill={getDeficiencyColor(stateData.chennai.deficiencyRate)}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:stroke-primary hover:stroke-4 transition-all"
                    onMouseEnter={() => setHoveredState('chennai')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('chennai')}
                  />
                  
                  {/* Telangana */}
                  <path
                    d="M420 400 L480 390 L520 420 L510 460 L480 480 L450 470 L420 440 Z"
                    fill={getDeficiencyColor(stateData.hyderabad.deficiencyRate)}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:stroke-primary hover:stroke-4 transition-all"
                    onMouseEnter={() => setHoveredState('hyderabad')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('hyderabad')}
                  />
                  
                  {/* West Bengal */}
                  <path
                    d="M600 300 L680 290 L720 330 L710 380 L680 420 L640 410 L610 370 L600 330 Z"
                    fill={getDeficiencyColor(stateData.kolkata.deficiencyRate)}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:stroke-primary hover:stroke-4 transition-all"
                    onMouseEnter={() => setHoveredState('kolkata')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('kolkata')}
                  />
                  
                  {/* Punjab */}
                  <path
                    d="M300 120 L380 110 L400 140 L390 170 L350 180 L310 170 L290 150 Z"
                    fill={getDeficiencyColor(stateData.punjab.deficiencyRate)}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:stroke-primary hover:stroke-4 transition-all"
                    onMouseEnter={() => setHoveredState('punjab')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('punjab')}
                  />
                  
                  {/* Delhi */}
                  <circle
                    cx="380"
                    cy="190"
                    r="20"
                    fill={getDeficiencyColor(stateData.delhi.deficiencyRate)}
                    stroke="white"
                    strokeWidth="3"
                    className="cursor-pointer hover:stroke-primary hover:stroke-4 transition-all"
                    onMouseEnter={() => setHoveredState('delhi')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('delhi')}
                  />
                  
                  {/* Uttar Pradesh */}
                  <path
                    d="M400 180 L550 170 L580 200 L570 250 L520 280 L450 270 L420 240 L400 210 Z"
                    fill="#E0E0E0"
                    stroke="white"
                    strokeWidth="2"
                    className="opacity-60"
                  />
                  
                  {/* Madhya Pradesh */}
                  <path
                    d="M360 250 L520 240 L540 280 L520 320 L480 340 L420 350 L380 320 Z"
                    fill="#E0E0E0"
                    stroke="white"
                    strokeWidth="2"
                    className="opacity-60"
                  />
                  
                  {/* Bihar */}
                  <path
                    d="M570 250 L640 240 L660 270 L650 300 L620 310 L590 300 L570 280 Z"
                    fill="#E0E0E0"
                    stroke="white"
                    strokeWidth="2"
                    className="opacity-60"
                  />
                  
                  {/* Jharkhand */}
                  <path
                    d="M590 300 L640 290 L660 320 L640 350 L610 360 L590 340 Z"
                    fill="#E0E0E0"
                    stroke="white"
                    strokeWidth="2"
                    className="opacity-60"
                  />
                  
                  {/* Odisha */}
                  <path
                    d="M640 350 L690 340 L710 380 L700 420 L670 430 L640 410 Z"
                    fill="#E0E0E0"
                    stroke="white"
                    strokeWidth="2"
                    className="opacity-60"
                  />
                  
                  {/* Andhra Pradesh */}
                  <path
                    d="M480 480 L550 470 L580 500 L570 540 L530 560 L490 550 L480 520 Z"
                    fill="#E0E0E0"
                    stroke="white"
                    strokeWidth="2"
                    className="opacity-60"
                  />
                </g>
                
                {/* State Labels */}
                <g className="text-sm font-semibold fill-gray-800">
                  <text x="230" y="260" textAnchor="middle">Rajasthan</text>
                  <text x="140" y="335" textAnchor="middle">Gujarat</text>
                  <text x="310" y="390" textAnchor="middle">Maharashtra</text>
                  <text x="350" y="510" textAnchor="middle">Karnataka</text>
                  <text x="285" y="600" textAnchor="middle">Kerala</text>
                  <text x="415" y="600" textAnchor="middle">Tamil Nadu</text>
                  <text x="465" y="435" textAnchor="middle">Telangana</text>
                  <text x="650" y="355" textAnchor="middle">West Bengal</text>
                  <text x="345" y="145" textAnchor="middle">Punjab</text>
                  <text x="375" y="185" textAnchor="middle" className="fill-white font-bold">Delhi</text>
                </g>
                
                {/* India Border Outline */}
                <path
                  d="M250 80 L400 70 L500 80 L600 90 L700 120 L750 160 L780 200 L800 250 L790 300 L780 350 L760 400 L740 450 L700 480 L650 520 L600 550 L550 580 L500 600 L450 620 L400 640 L350 650 L300 660 L250 650 L200 630 L150 600 L120 560 L100 520 L90 480 L80 440 L75 400 L80 360 L90 320 L110 280 L130 240 L150 200 L180 160 L210 120 L240 90 Z"
                  fill="none"
                  stroke="#666"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  className="opacity-30"
                />
              </svg>
              
              {/* Hover Tooltip */}
              {hoveredState && stateData[hoveredState] && (
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-golden border border-primary/20 z-10">
                  <h4 className="font-semibold text-primary">{stateData[hoveredState].name}</h4>
                  <p className="text-sm text-muted-foreground">
                    Deficiency Rate: <span className="font-semibold text-destructive">
                      {stateData[hoveredState].deficiencyRate}%
                    </span>
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Info Panel */}
        <div className="space-y-6">
          {/* Legend */}
          <Card className="p-4 border-primary/20 shadow-soft">
            <h3 className="font-bold text-foreground mb-4">Deficiency Levels</h3>
            <div className="space-y-2">
              {getLegendItems().map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded border border-gray-300"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex-1">
                    <span className="text-sm font-medium">{item.label}</span>
                    <div className="text-xs text-muted-foreground">{item.range}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Selected State Info */}
          {selectedState && stateData[selectedState] && (
            <Card className="p-4 border-primary/20 shadow-golden">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-foreground">{stateData[selectedState].name}</h3>
                  <Badge 
                    variant="destructive"
                    className="bg-destructive/10 text-destructive border-destructive/20"
                  >
                    {stateData[selectedState].deficiencyRate}% Deficient
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Population:</span>
                    <p className="font-semibold">{stateData[selectedState].population}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Major Cities:</span>
                    <p className="text-sm">{stateData[selectedState].majorCities.join(', ')}</p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Key Statistics */}
          <Card className="p-4 border-primary/20 shadow-soft">
            <h3 className="font-bold text-foreground mb-4">Key Statistics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">National Average:</span>
                <span className="font-semibold text-destructive">78%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Urban Areas:</span>
                <span className="font-semibold text-destructive">85%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Rural Areas:</span>
                <span className="font-semibold text-destructive">70%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Children (0-18):</span>
                <span className="font-semibold text-destructive">82%</span>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="p-4 bg-gradient-primary text-white border-0">
            <h3 className="font-bold mb-2">Take Action Today</h3>
            <p className="text-sm text-white/90 mb-3">
              Don't let your family be part of these statistics. Start your Vitamin D₃ journey with SuryAmrit™.
            </p>
            <button className="w-full bg-white text-primary font-semibold py-2 px-4 rounded-lg hover:bg-white/90 transition-colors">
              Order SuryAmrit™ Now
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default D3DeficiencyMap;