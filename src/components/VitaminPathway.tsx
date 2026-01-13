import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sun, Zap, Target, ZoomIn } from "lucide-react";

const VitaminPathway = () => {
  return (
    <section id="science" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Vitamin D₃ Metabolic Pathway</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding how your body transforms sunlight into essential health benefits
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center border-primary/20 hover:shadow-golden transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-secondary">UVB RAYS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Sunlight exposure on skin</p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20 hover:shadow-golden transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-orange-400 rounded"></div>
              </div>
              <CardTitle className="text-secondary">SKIN → LIVER</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">7-DEHYDROCHOLESTEROL</p>
              <p className="text-sm text-primary font-semibold mt-2">D₃ → 25 (OH) D (CALCIDIOL)</p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20 hover:shadow-golden transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-red-400 rounded-lg"></div>
              </div>
              <CardTitle className="text-secondary">LIVER → KIDNEY</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-semibold">25(OH)D → 1,25 (OH) 2D</p>
              <p className="text-muted-foreground">(CALCITRIOL, ACTIVE FORM)</p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20 hover:shadow-golden transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-secondary">CELL</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Active vitamin D₃ reaches target cells</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-soft animate-fade-in">
          <h3 className="text-3xl font-bold text-secondary mb-8 text-center bg-gradient-primary bg-clip-text text-transparent">
            Why Choose SuryAmrit™?
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {/* Ghee Base Card */}
            <Card className="group border-primary/20 hover:shadow-golden transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-yellow-300 rounded-full border-2 border-white"></div>
                </div>
                <h4 className="font-bold text-secondary mb-2">Ghee Base</h4>
                <p className="text-sm text-muted-foreground">Enhances Vitamin D₃ Absorption</p>
              </CardContent>
            </Card>

            {/* 600 IU Card */}
            <Card className="group border-primary/20 hover:shadow-golden transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">600</span>
                </div>
                <h4 className="font-bold text-secondary mb-2">600 IU Natural D₃</h4>
                <p className="text-sm text-muted-foreground">Scientifically Safe, RDA-Aligned</p>
              </CardContent>
            </Card>

            {/* Chewable Card */}
            <Card className="group border-primary/20 hover:shadow-golden transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-400 rounded-lg"></div>
                </div>
                <h4 className="font-bold text-secondary mb-2">Soft Chewable</h4>
                <p className="text-sm text-muted-foreground">Water-Free, Anytime-Anywhere Intake</p>
              </CardContent>
            </Card>

            {/* High Compliance Card */}
            <Card className="group border-primary/20 hover:shadow-golden transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-secondary mb-2">High Compliance</h4>
                <p className="text-sm text-muted-foreground">Easy to Chew = Higher Daily Adoption</p>
              </CardContent>
            </Card>

            {/* Vegetarian Card */}
            <Card className="group border-primary/20 hover:shadow-golden transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h4 className="font-bold text-secondary mb-2">Plant Based Shell</h4>
                <p className="text-sm text-muted-foreground">100% Animal-Free and Gut-friendly</p>
              </CardContent>
            </Card>

            {/* Indian Lifestyle Card */}
            <Card className="group border-primary/20 hover:shadow-golden transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-secondary mb-2">Indian Lifestyle</h4>
                <p className="text-sm text-muted-foreground">Matches Sunlight, Food & Climate Profiles</p>
              </CardContent>
            </Card>

            {/* All Ages Card */}
            <Card className="group border-primary/20 hover:shadow-golden transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">1+</span>
                </div>
                <h4 className="font-bold text-secondary mb-2">All Ages Safe</h4>
                <p className="text-sm text-muted-foreground">Safe for Kids 1+, Adults, Elderly</p>
              </CardContent>
            </Card>

            {/* Ayurvedic Card */}
            <Card className="group border-primary/20 hover:shadow-golden transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-secondary mb-2">Ayurvedic Logic</h4>
                <p className="text-sm text-muted-foreground">Supports Agni, Ojas, and Dhatu Balance</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Organ-wise Vitamin D₃ Impact Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Organ-wise Vitamin D₃ Impact
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Vitamin D₃ benefits every organ system across all life stages
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Baby/Child Impact */}
            <TooltipProvider>
              <Card className="group border-primary/20 hover:shadow-golden transition-all duration-500 hover:scale-105 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-secondary mb-4">Growing Children (1+ Years)</CardTitle>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div className="relative mx-auto w-48 h-64 bg-white rounded-xl shadow-soft overflow-hidden cursor-pointer group/image">
                        <img 
                          src="/lovable-uploads/7551353f-d8ef-4b55-bb2d-63bfdad95f0b.png" 
                          alt="Child anatomy showing organ systems" 
                          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover/image:scale-110"
                        />
                        <div className="absolute top-2 right-2 bg-primary/80 rounded-full p-1 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                          <ZoomIn className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      className="w-80 p-4 bg-white border border-primary/20 shadow-golden z-[60]"
                      sideOffset={15}
                      avoidCollisions={true}
                      collisionPadding={20}
                    >
                      <div className="space-y-3">
                        <h5 className="font-bold text-primary text-lg">Child Benefits (1-15 Points)</h5>
                        <div className="grid gap-2 text-sm">
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">🦴 Bone & Skeletal Development:</p>
                            <p className="text-muted-foreground ml-4">1. Enhanced calcium absorption for stronger bones</p>
                            <p className="text-muted-foreground ml-4">2. Proper teeth formation and dental health</p>
                            <p className="text-muted-foreground ml-4">3. Prevention of rickets and bone deformities</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">🛡️ Immune System:</p>
                            <p className="text-muted-foreground ml-4">4. Stronger resistance to infections</p>
                            <p className="text-muted-foreground ml-4">5. Reduced frequency of respiratory illnesses</p>
                            <p className="text-muted-foreground ml-4">6. Better vaccine response</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">🧠 Brain & Cognitive:</p>
                            <p className="text-muted-foreground ml-4">7. Enhanced brain development</p>
                            <p className="text-muted-foreground ml-4">8. Improved concentration and focus</p>
                            <p className="text-muted-foreground ml-4">9. Better learning capacity</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">💪 Physical Growth:</p>
                            <p className="text-muted-foreground ml-4">10. Optimal muscle development</p>
                            <p className="text-muted-foreground ml-4">11. Better physical coordination</p>
                            <p className="text-muted-foreground ml-4">12. Improved energy levels</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">🫁 Overall Health:</p>
                            <p className="text-muted-foreground ml-4">13. Better respiratory function</p>
                            <p className="text-muted-foreground ml-4">14. Healthy skin development</p>
                            <p className="text-muted-foreground ml-4">15. Improved overall growth patterns</p>
                          </div>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <h5 className="font-semibold text-primary mb-2">Key Benefits:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Bone & teeth development</li>
                      <li>• Immune system strengthening</li>
                      <li>• Brain development support</li>
                      <li>• Respiratory health</li>
                      <li>• Muscle growth</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>

            {/* Adult Male Impact */}
            <TooltipProvider>
              <Card className="group border-primary/20 hover:shadow-golden transition-all duration-500 hover:scale-105 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-secondary mb-4">Adult Men</CardTitle>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div className="relative mx-auto w-48 h-64 bg-white rounded-xl shadow-soft overflow-hidden cursor-pointer group/image">
                        <img 
                          src="/lovable-uploads/71d77fd3-3ffe-49be-af8f-5882615635ef.png" 
                          alt="Adult male anatomy showing organ systems" 
                          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover/image:scale-110"
                        />
                        <div className="absolute top-2 right-2 bg-primary/80 rounded-full p-1 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                          <ZoomIn className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      className="w-80 p-4 bg-white border border-primary/20 shadow-golden z-[60]"
                      sideOffset={15}
                      avoidCollisions={true}
                      collisionPadding={20}
                    >
                      <div className="space-y-3">
                        <h5 className="font-bold text-primary text-lg">Adult Men Benefits (1-15 Points)</h5>
                        <div className="grid gap-2 text-sm">
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">❤️ Cardiovascular Health:</p>
                            <p className="text-muted-foreground ml-4">1. Better blood pressure regulation</p>
                            <p className="text-muted-foreground ml-4">2. Reduced risk of heart disease</p>
                            <p className="text-muted-foreground ml-4">3. Improved blood vessel function</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">💪 Muscle & Strength:</p>
                            <p className="text-muted-foreground ml-4">4. Enhanced muscle protein synthesis</p>
                            <p className="text-muted-foreground ml-4">5. Improved physical performance</p>
                            <p className="text-muted-foreground ml-4">6. Better recovery after exercise</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">🏃 Hormonal Balance:</p>
                            <p className="text-muted-foreground ml-4">7. Testosterone level support</p>
                            <p className="text-muted-foreground ml-4">8. Better energy and vitality</p>
                            <p className="text-muted-foreground ml-4">9. Improved mood stability</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">🦴 Bone & Joint Health:</p>
                            <p className="text-muted-foreground ml-4">10. Stronger bone density</p>
                            <p className="text-muted-foreground ml-4">11. Reduced risk of fractures</p>
                            <p className="text-muted-foreground ml-4">12. Better joint mobility</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">🧠 Mental & Immune:</p>
                            <p className="text-muted-foreground ml-4">13. Enhanced cognitive function</p>
                            <p className="text-muted-foreground ml-4">14. Stronger immune response</p>
                            <p className="text-muted-foreground ml-4">15. Better prostate health support</p>
                          </div>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <h5 className="font-semibold text-primary mb-2">Key Benefits:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Cardiovascular health</li>
                      <li>• Testosterone support</li>
                      <li>• Muscle strength & function</li>
                      <li>• Prostate health</li>
                      <li>• Mental wellness</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>

            {/* Adult Female Impact */}
            <TooltipProvider>
              <Card className="group border-primary/20 hover:shadow-golden transition-all duration-500 hover:scale-105 bg-gradient-to-br from-pink-50 to-purple-50">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-secondary mb-4">Adult Women</CardTitle>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div className="relative mx-auto w-48 h-64 bg-white rounded-xl shadow-soft overflow-hidden cursor-pointer group/image">
                        <img 
                          src="/lovable-uploads/14855da8-65a6-4354-817a-b11d11497033.png" 
                          alt="Adult female anatomy showing organ systems" 
                          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover/image:scale-110"
                        />
                        <div className="absolute top-2 right-2 bg-primary/80 rounded-full p-1 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                          <ZoomIn className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      className="w-80 p-4 bg-white border border-primary/20 shadow-golden z-[60]"
                      sideOffset={15}
                      avoidCollisions={true}
                      collisionPadding={20}
                    >
                      <div className="space-y-3">
                        <h5 className="font-bold text-primary text-lg">Adult Women Benefits (1-15 Points)</h5>
                        <div className="grid gap-2 text-sm">
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">🦴 Bone Health & Density:</p>
                            <p className="text-muted-foreground ml-4">1. Prevention of osteoporosis</p>
                            <p className="text-muted-foreground ml-4">2. Stronger bone density maintenance</p>
                            <p className="text-muted-foreground ml-4">3. Reduced fracture risk</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">🤰 Reproductive Health:</p>
                            <p className="text-muted-foreground ml-4">4. Fertility support</p>
                            <p className="text-muted-foreground ml-4">5. Healthy pregnancy outcomes</p>
                            <p className="text-muted-foreground ml-4">6. Reduced pregnancy complications</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">⚖️ Hormonal Balance:</p>
                            <p className="text-muted-foreground ml-4">7. Menstrual cycle regulation</p>
                            <p className="text-muted-foreground ml-4">8. Menopause symptom relief</p>
                            <p className="text-muted-foreground ml-4">9. Mood stability support</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">❤️ Cardiovascular & Immune:</p>
                            <p className="text-muted-foreground ml-4">10. Heart disease prevention</p>
                            <p className="text-muted-foreground ml-4">11. Better immune function</p>
                            <p className="text-muted-foreground ml-4">12. Reduced inflammation</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold text-secondary">✨ Beauty & Wellness:</p>
                            <p className="text-muted-foreground ml-4">13. Healthy skin and hair</p>
                            <p className="text-muted-foreground ml-4">14. Enhanced energy levels</p>
                            <p className="text-muted-foreground ml-4">15. Better sleep quality</p>
                          </div>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <h5 className="font-semibold text-primary mb-2">Key Benefits:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Bone density maintenance</li>
                      <li>• Reproductive health</li>
                      <li>• Pregnancy support</li>
                      <li>• Hormonal balance</li>
                      <li>• Skin health</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>
          </div>

          {/* Common Benefits Section */}
          <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-center text-secondary mb-6">
              Universal Health Benefits
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🦴</span>
                </div>
                <h5 className="font-semibold text-secondary mb-1">Bone Health</h5>
                <p className="text-sm text-muted-foreground">Calcium absorption & bone strength</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🛡️</span>
                </div>
                <h5 className="font-semibold text-secondary mb-1">Immunity</h5>
                <p className="text-sm text-muted-foreground">Enhanced immune response</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">❤️</span>
                </div>
                <h5 className="font-semibold text-secondary mb-1">Heart Health</h5>
                <p className="text-sm text-muted-foreground">Cardiovascular support</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🧠</span>
                </div>
                <h5 className="font-semibold text-secondary mb-1">Brain Function</h5>
                <p className="text-sm text-muted-foreground">Cognitive health support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitaminPathway;