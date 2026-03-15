import { useState } from 'react';
import { ChevronLeft, Globe, BookOpen } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Comprehensive list of Indigenous Nations and languages in Canada with expanded data
const indigenousNations = [
  // First Nations - Algonquian Language Family
  { name: 'Anishinaabe (Ojibwe)', language: 'Anishinaabemowin', family: 'Algonquian', region: 'Great Lakes, Ontario, Quebec' },
  { name: 'Mi\'kmaq', language: 'Mi\'kmaq', family: 'Algonquian', region: 'Maritime Provinces' },
  { name: 'Maliseet', language: 'Maliseet-Passamaquoddy', family: 'Algonquian', region: 'New Brunswick, Maine' },
  { name: 'Innu', language: 'Innu-aimun', family: 'Algonquian', region: 'Quebec, Labrador' },
  { name: 'Cree', language: 'Cree', family: 'Algonquian', region: 'Across Canada' },
  { name: 'Blackfoot Confederacy', language: 'Blackfoot', family: 'Algonquian', region: 'Alberta, Montana' },
  { name: 'Gwich\'in', language: 'Gwich\'in', family: 'Algonquian', region: 'Yukon, Northwest Territories' },
  
  // First Nations - Athabaskan Language Family
  { name: 'Dene', language: 'Dene', family: 'Athabaskan', region: 'Northwest Territories, Alberta' },
  { name: 'Tlingit', language: 'Tlingit', family: 'Na-Dene', region: 'British Columbia, Alaska' },
  { name: 'Haida', language: 'Haida', family: 'Isolate', region: 'British Columbia, Alaska' },
  
  // First Nations - Salishan Language Family
  { name: 'Salish Peoples', language: 'Salish', family: 'Salishan', region: 'British Columbia, Washington' },
  { name: 'Nlaka\'pamux', language: 'Nlaka\'pamux', family: 'Salishan', region: 'British Columbia' },
  { name: 'Secwepemc (Shuswap)', language: 'Secwepemctsin', family: 'Salishan', region: 'British Columbia' },
  
  // First Nations - Iroquoian Language Family
  { name: 'Haudenosaunee (Iroquois)', language: 'Haudenosaunee', family: 'Iroquoian', region: 'Ontario, Quebec, New York' },
  { name: 'Mohawk', language: 'Kanien\'kéha', family: 'Iroquoian', region: 'Ontario, Quebec' },
  { name: 'Oneida', language: 'Onʌyotaʔa', family: 'Iroquoian', region: 'Ontario' },
  
  // First Nations - Wakashan Language Family
  { name: 'Kwakwaka\'wakw', language: 'Kwakwala', family: 'Wakashan', region: 'British Columbia' },
  { name: 'Nuu-chah-nulth', language: 'Nuu-chah-nulth', family: 'Wakashan', region: 'British Columbia' },
  
  // First Nations - Other Language Families
  { name: 'Tsimshian', language: 'Tsimshian', family: 'Penutian', region: 'British Columbia' },
  { name: 'Ktunaxa', language: 'Ktunaxa', family: 'Isolate', region: 'British Columbia' },
  { name: 'Tahltan', language: 'Tahltan', family: 'Athabaskan', region: 'British Columbia' },
  { name: 'Gitxsan', language: 'Gitxsan', family: 'Penutian', region: 'British Columbia' },
  
  // Inuit Peoples
  { name: 'Inuit', language: 'Inuktitut', family: 'Inuit-Aleut', region: 'Arctic regions' },
  { name: 'Inuit (Inuinnaqtun)', language: 'Inuinnaqtun', family: 'Inuit-Aleut', region: 'Northwest Territories' },
  { name: 'Inuit (Inupiaq)', language: 'Inupiaq', family: 'Inuit-Aleut', region: 'Alaska, Arctic' },
  
  // Métis
  { name: 'Métis Nation', language: 'Michif', family: 'Mixed (French-Cree)', region: 'Across Canada' },
  { name: 'Métis (French Michif)', language: 'French Michif', family: 'Mixed', region: 'Western Canada' },
  // Additional nations for comprehensive coverage
  { name: 'Kwakwaka\'wakw', language: 'Kwakwala', family: 'Wakashan', region: 'British Columbia Coast' },
  { name: 'Nuu-chah-nulth', language: 'Nuu-chah-nulth', family: 'Wakashan', region: 'Vancouver Island' },
  { name: 'Squamish Nation', language: 'Lil\'wat', family: 'Salishan', region: 'British Columbia' },
  { name: 'Tsleil-Waututh', language: 'Lil\'wat', family: 'Salishan', region: 'British Columbia' },
  { name: 'Snoqualmie', language: 'Lushootseed', family: 'Salishan', region: 'Washington/British Columbia' },
  { name: 'Lummi Nation', language: 'Lushootseed', family: 'Salishan', region: 'Washington/British Columbia' },
  { name: 'Shuswap (Secwepemc)', language: 'Secwepemctsin', family: 'Salishan', region: 'British Columbia Interior' },
  { name: 'Okanagan Nation', language: 'Syilx', family: 'Salishan', region: 'British Columbia/Washington' },
  { name: 'Kootenai (Ktunaxa)', language: 'Ktunaxa', family: 'Isolate', region: 'British Columbia/Montana' },
  { name: 'Gitksan', language: 'Gitxsan', family: 'Penutian', region: 'Northern British Columbia' },
  { name: 'Wet\'suwet\'en', language: 'Wet\'suwet\'en', family: 'Athabaskan', region: 'Northern British Columbia' },
  { name: 'Carrier', language: 'Carrier', family: 'Athabaskan', region: 'British Columbia Interior' },
  { name: 'Tahltan', language: 'Tahltan', family: 'Athabaskan', region: 'Northern British Columbia' },
  { name: 'Kaska Dena', language: 'Kaska', family: 'Athabaskan', region: 'Yukon/British Columbia' },
  { name: 'Tlingit', language: 'Tlingit', family: 'Na-Dene', region: 'Alaska/British Columbia Coast' },
  { name: 'Haida', language: 'Haida', family: 'Isolate', region: 'Haida Gwaii/Alaska' },
  { name: 'Tsimshian', language: 'Tsimshian', family: 'Penutian', region: 'Northern British Columbia Coast' },
  { name: 'Nisga\'a', language: 'Nisga\'a', family: 'Penutian', region: 'Northern British Columbia' },
  { name: 'Tahltan', language: 'Tahltan', family: 'Athabaskan', region: 'Northern British Columbia' },
  { name: 'Inuvialuit', language: 'Inuvialuktun', family: 'Inuit-Aleut', region: 'Northwest Territories' },
  { name: 'Gwich\'in', language: 'Gwich\'in', family: 'Algonquian', region: 'Yukon/Northwest Territories' },
  { name: 'Slavey', language: 'Slavey', family: 'Athabaskan', region: 'Northwest Territories' },
  { name: 'Chipewyan', language: 'Chipewyan', family: 'Athabaskan', region: 'Northwest Territories/Alberta' },
  { name: 'Yellowknife Dene', language: 'Dene', family: 'Athabaskan', region: 'Northwest Territories' },
  { name: 'Aklavik', language: 'Inuvialuktun', family: 'Inuit-Aleut', region: 'Northwest Territories' },
];

const languageFamilies = [
  'All Languages',
  'Algonquian',
  'Athabaskan',
  'Inuit-Aleut',
  'Iroquoian',
  'Salishan',
  'Wakashan',
  'Penutian',
  'Na-Dene',
  'Isolate',
  'Mixed (French-Cree)',
];

// Language statistics
const languageStats = {
  totalLanguages: 70,
  totalFamilies: 12,
  totalPeople: 1700000,
  totalNations: indigenousNations.length,
};

export default function IndigenousNations() {
  const [, setLocation] = useLocation();
  const [selectedFamily, setSelectedFamily] = useState('All Languages');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const filteredNations = indigenousNations.filter((nation) => {
    const matchesFamily = selectedFamily === 'All Languages' || nation.family === selectedFamily;
    const matchesSearch = nation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         nation.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         nation.region.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFamily && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <button
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-amber-orange hover:text-amber-light mb-8 transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Home
        </button>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-forest-green mb-4">Indigenous Nations of Canada</h1>
          <p className="text-xl text-charcoal-light mb-6">
            This advocacy story is for all Indigenous peoples. Select your nation and language to view the story in your language.
          </p>
          <p className="text-sm text-charcoal-light mb-6">
            Canada is home to over 70 Indigenous languages across 12 language families, representing First Nations, Inuit, and Métis peoples.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-forest-green/10 rounded-lg border-l-4 border-amber-orange">
            <div>
              <p className="text-3xl font-bold text-amber-orange">{languageStats.totalLanguages}+</p>
              <p className="text-sm text-charcoal-light">Indigenous Languages</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-orange">{languageStats.totalFamilies}</p>
              <p className="text-sm text-charcoal-light">Language Families</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-orange">1.7M+</p>
              <p className="text-sm text-charcoal-light">Indigenous People</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-orange">3</p>
              <p className="text-sm text-charcoal-light">Peoples</p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-8 border-amber-orange/20">
          <CardHeader className="bg-forest-green text-cream">
            <CardTitle className="flex items-center gap-2">
              <Globe size={24} />
              Find Your Nation & Language
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Search by Nation, Language, or Region</label>
              <Input
                type="text"
                placeholder="e.g., Cree, Mi'kmaq, Inuit, Quebec..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Language Family</label>
              <Select value={selectedFamily} onValueChange={setSelectedFamily}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select language family" />
                </SelectTrigger>
                <SelectContent>
                  {languageFamilies.map((family) => (
                    <SelectItem key={family} value={family}>
                      {family}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="text-sm text-charcoal-light">
              Showing {filteredNations.length} of {indigenousNations.length} nations
            </div>
          </CardContent>
        </Card>

        {/* Nations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredNations.map((nation) => (
            <Card
              key={nation.name}
              className="border-amber-orange/20 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedLanguage(nation.language)}
            >
              <CardHeader className="bg-forest-green/10">
                <CardTitle className="text-lg">{nation.name}</CardTitle>
                <CardDescription className="text-amber-orange font-semibold">
                  {nation.language}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                <div>
                  <p className="text-xs text-charcoal-light uppercase tracking-wider">Language Family</p>
                  <p className="font-semibold text-charcoal">{nation.family}</p>
                </div>
                <div>
                  <p className="text-xs text-charcoal-light uppercase tracking-wider">Region</p>
                  <p className="font-semibold text-charcoal">{nation.region}</p>
                </div>
                <Button
                  className="w-full bg-amber-orange hover:bg-amber-light text-white mt-4"
                  onClick={() => setSelectedLanguage(nation.language)}
                >
                  <BookOpen size={16} className="mr-2" />
                  View Story in {nation.language}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNations.length === 0 && (
          <Card className="border-amber-orange/20">
            <CardContent className="pt-8 text-center">
              <p className="text-lg text-charcoal-light">
                No nations found matching your search. Try different keywords or select "All Languages".
              </p>
            </CardContent>
          </Card>
        )}

        {/* Translation Notice */}
        <Card className="border-amber-orange/20 bg-amber-orange/5">
          <CardHeader>
            <CardTitle className="text-lg">Language Translation Notice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-charcoal-light">
              We are working to provide translations of this advocacy story into all major Indigenous languages. 
              If you would like to help translate this story into your language, please contact us at{' '}
              <strong>justiceforbarran@gmail.com</strong>.
            </p>
            <p className="text-sm text-charcoal-light">
              Language preservation and accessibility are essential to our movement. Your language, your voice, your story matters.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
