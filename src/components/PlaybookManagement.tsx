
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, BookOpen, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Play {
  id: number;
  name: string;
  category: string;
  description: string;
  formation: string;
  difficulty: string;
  tags: string[];
  notes: string;
}

const initialPlays: Play[] = [
  {
    id: 1,
    name: "4-3-3 Attack",
    category: "Offensive",
    description: "Wide attacking formation with wingers providing width and crosses",
    formation: "4-3-3",
    difficulty: "Intermediate",
    tags: ["attack", "wings", "crosses"],
    notes: "Best used against defensive teams"
  },
  {
    id: 2,
    name: "Defensive Block",
    category: "Defensive",
    description: "Compact defensive shape to prevent through balls",
    formation: "4-5-1",
    difficulty: "Beginner",
    tags: ["defense", "compact", "counter"],
    notes: "Effective against strong attacking teams"
  },
  {
    id: 3,
    name: "Tiki-Taka",
    category: "Possession",
    description: "Short passing game to maintain possession and create openings",
    formation: "4-3-3",
    difficulty: "Advanced",
    tags: ["possession", "passing", "technical"],
    notes: "Requires technically skilled players"
  }
];

export function PlaybookManagement() {
  const [plays, setPlays] = useState<Play[]>(initialPlays);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlay, setEditingPlay] = useState<Play | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    formation: "",
    difficulty: "",
    tags: "",
    notes: ""
  });

  const categories = ["Offensive", "Defensive", "Possession", "Set Pieces", "Transition"];
  const difficulties = ["Beginner", "Intermediate", "Advanced"];

  const handleAddPlay = () => {
    setEditingPlay(null);
    setFormData({
      name: "",
      category: "",
      description: "",
      formation: "",
      difficulty: "",
      tags: "",
      notes: ""
    });
    setIsModalOpen(true);
  };

  const handleEditPlay = (play: Play) => {
    setEditingPlay(play);
    setFormData({
      name: play.name,
      category: play.category,
      description: play.description,
      formation: play.formation,
      difficulty: play.difficulty,
      tags: play.tags.join(", "),
      notes: play.notes
    });
    setIsModalOpen(true);
  };

  const handleDeletePlay = (playId: number) => {
    setPlays(plays.filter(play => play.id !== playId));
    toast({
      title: "Play Deleted",
      description: "The play has been removed from your playbook.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const playData = {
      ...formData,
      tags: formData.tags.split(",").map(tag => tag.trim()).filter(tag => tag),
      id: editingPlay ? editingPlay.id : Date.now()
    };

    if (editingPlay) {
      setPlays(plays.map(play => play.id === editingPlay.id ? playData as Play : play));
      toast({
        title: "Play Updated",
        description: "The play has been successfully updated.",
      });
    } else {
      setPlays([...plays, playData as Play]);
      toast({
        title: "Play Added",
        description: "New play has been added to your playbook.",
      });
    }

    setIsModalOpen(false);
  };

  const filteredPlays = plays.filter(play => {
    const matchesSearch = play.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         play.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         play.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === "all" || play.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <Input
                placeholder="Search plays..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleAddPlay} className="w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Add Play
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Plays Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlays.map((play) => (
          <Card key={play.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{play.name}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline">{play.category}</Badge>
                    <Badge variant={
                      play.difficulty === "Beginner" ? "secondary" :
                      play.difficulty === "Intermediate" ? "default" : "destructive"
                    }>
                      {play.difficulty}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditPlay(play)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeletePlay(play.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">Formation: {play.formation}</span>
                </div>
                <p className="text-sm text-gray-600">{play.description}</p>
              </div>
              
              {play.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {play.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {play.notes && (
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-500">
                    <BookOpen className="w-3 h-3 inline mr-1" />
                    {play.notes}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPlays.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No plays found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || filterCategory !== "all" 
                ? "Try adjusting your search or filter criteria."
                : "Start building your playbook by adding your first play."
              }
            </p>
            <Button onClick={handleAddPlay}>
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Play
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Add/Edit Play Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPlay ? "Edit Play" : "Add New Play"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Play Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="formation">Formation</Label>
                <Input
                  id="formation"
                  value={formData.formation}
                  onChange={(e) => setFormData(prev => ({ ...prev, formation: e.target.value }))}
                  placeholder="e.g., 4-3-3"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="difficulty">Difficulty *</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, difficulty: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map((difficulty) => (
                      <SelectItem key={difficulty} value={difficulty}>
                        {difficulty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                required
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                value={formData.tags}
                onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                placeholder="e.g., attack, wings, crosses"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                rows={2}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                {editingPlay ? "Update Play" : "Add Play"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
