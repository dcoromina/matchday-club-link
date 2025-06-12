
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, DollarSign } from "lucide-react";

interface Revenue {
  id: string;
  description: string;
  amount: number;
  source: string;
  date: string;
  type: 'Membership' | 'Sponsorship' | 'Events' | 'Merchandise' | 'Tournaments' | 'Other';
}

interface RevenueFormData {
  description: string;
  amount: string;
  source: string;
  type: 'Membership' | 'Sponsorship' | 'Events' | 'Merchandise' | 'Tournaments' | 'Other';
}

export function RevenueTracker() {
  const [revenues, setRevenues] = useState<Revenue[]>([
    {
      id: "1",
      description: "Monthly Membership Fees",
      amount: 15000,
      source: "Member Payments",
      date: "2024-06-01",
      type: "Membership"
    },
    {
      id: "2",
      description: "Nike Sponsorship Deal",
      amount: 25000,
      source: "Nike Inc.",
      date: "2024-06-05",
      type: "Sponsorship"
    },
    {
      id: "3",
      description: "Annual Tournament Entry Fees",
      amount: 8500,
      source: "Tournament Registration",
      date: "2024-06-07",
      type: "Tournaments"
    },
    {
      id: "4",
      description: "Team Merchandise Sales",
      amount: 3200,
      source: "Online Store",
      date: "2024-06-08",
      type: "Merchandise"
    }
  ]);

  const [editingRevenue, setEditingRevenue] = useState<Revenue | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const form = useForm<RevenueFormData>({
    defaultValues: {
      description: "",
      amount: "",
      source: "",
      type: "Membership",
    },
  });

  const onSubmit = (data: RevenueFormData) => {
    const revenue: Revenue = {
      id: editingRevenue?.id || Date.now().toString(),
      description: data.description,
      amount: parseFloat(data.amount),
      source: data.source,
      date: new Date().toISOString().split('T')[0],
      type: data.type,
    };

    if (editingRevenue) {
      setRevenues(prev => prev.map(r => r.id === editingRevenue.id ? revenue : r));
      toast({
        title: "Revenue Updated",
        description: "The revenue record has been successfully updated.",
      });
    } else {
      setRevenues(prev => [revenue, ...prev]);
      toast({
        title: "Revenue Added",
        description: "New revenue has been recorded successfully.",
      });
    }

    form.reset();
    setEditingRevenue(null);
    setShowForm(false);
  };

  const handleEdit = (revenue: Revenue) => {
    setEditingRevenue(revenue);
    form.setValue("description", revenue.description);
    form.setValue("amount", revenue.amount.toString());
    form.setValue("source", revenue.source);
    form.setValue("type", revenue.type);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setRevenues(prev => prev.filter(r => r.id !== id));
    toast({
      title: "Revenue Deleted",
      description: "The revenue record has been removed successfully.",
    });
  };

  const totalRevenue = revenues.reduce((sum, revenue) => sum + revenue.amount, 0);

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Revenue Summary
          </CardTitle>
          <CardDescription>Track and manage all club revenue streams</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-600">
            ${totalRevenue.toLocaleString()}
          </div>
          <p className="text-sm text-muted-foreground">Total revenue this month</p>
        </CardContent>
      </Card>

      {/* Add Revenue Button */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Revenue Records</h3>
        <Button 
          onClick={() => {
            setShowForm(!showForm);
            setEditingRevenue(null);
            form.reset();
          }}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Revenue
        </Button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingRevenue ? "Edit Revenue" : "Add New Revenue"}</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter revenue description" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount ($)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" placeholder="0.00" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="source"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Source</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter revenue source" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type</FormLabel>
                        <FormControl>
                          <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option value="Membership">Membership</option>
                            <option value="Sponsorship">Sponsorship</option>
                            <option value="Events">Events</option>
                            <option value="Merchandise">Merchandise</option>
                            <option value="Tournaments">Tournaments</option>
                            <option value="Other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit">
                    {editingRevenue ? "Update Revenue" : "Add Revenue"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      setShowForm(false);
                      setEditingRevenue(null);
                      form.reset();
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}

      {/* Revenue List */}
      <div className="grid gap-4">
        {revenues.map((revenue) => (
          <Card key={revenue.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold">{revenue.description}</h4>
                  <p className="text-sm text-muted-foreground">{revenue.source}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      {revenue.type}
                    </span>
                    <span className="text-muted-foreground">{revenue.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-green-600">
                    ${revenue.amount.toLocaleString()}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(revenue)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(revenue.id)}
                    className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
