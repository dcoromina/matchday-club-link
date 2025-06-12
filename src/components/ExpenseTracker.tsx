
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, Receipt } from "lucide-react";

interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  type: 'Equipment' | 'Utilities' | 'Salaries' | 'Maintenance' | 'Travel' | 'Other';
}

interface ExpenseFormData {
  description: string;
  amount: string;
  category: string;
  type: 'Equipment' | 'Utilities' | 'Salaries' | 'Maintenance' | 'Travel' | 'Other';
}

export function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: "1",
      description: "Football Equipment",
      amount: 2500,
      category: "Sports Equipment",
      date: "2024-06-10",
      type: "Equipment"
    },
    {
      id: "2", 
      description: "Monthly Electricity Bill",
      amount: 800,
      category: "Facility Utilities",
      date: "2024-06-08",
      type: "Utilities"
    },
    {
      id: "3",
      description: "Coach Salaries",
      amount: 15000,
      category: "Staff Payment",
      date: "2024-06-01",
      type: "Salaries"
    },
    {
      id: "4",
      description: "Field Maintenance",
      amount: 1200,
      category: "Facility Maintenance",
      date: "2024-06-05",
      type: "Maintenance"
    }
  ]);

  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const form = useForm<ExpenseFormData>({
    defaultValues: {
      description: "",
      amount: "",
      category: "",
      type: "Equipment",
    },
  });

  const onSubmit = (data: ExpenseFormData) => {
    const expense: Expense = {
      id: editingExpense?.id || Date.now().toString(),
      description: data.description,
      amount: parseFloat(data.amount),
      category: data.category,
      date: new Date().toISOString().split('T')[0],
      type: data.type,
    };

    if (editingExpense) {
      setExpenses(prev => prev.map(e => e.id === editingExpense.id ? expense : e));
      toast({
        title: "Expense Updated",
        description: "The expense has been successfully updated.",
      });
    } else {
      setExpenses(prev => [expense, ...prev]);
      toast({
        title: "Expense Added",
        description: "New expense has been recorded successfully.",
      });
    }

    form.reset();
    setEditingExpense(null);
    setShowForm(false);
  };

  const handleEdit = (expense: Expense) => {
    setEditingExpense(expense);
    form.setValue("description", expense.description);
    form.setValue("amount", expense.amount.toString());
    form.setValue("category", expense.category);
    form.setValue("type", expense.type);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
    toast({
      title: "Expense Deleted",
      description: "The expense has been removed successfully.",
    });
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            Expense Summary
          </CardTitle>
          <CardDescription>Track and manage all club expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-red-600">
            ${totalExpenses.toLocaleString()}
          </div>
          <p className="text-sm text-muted-foreground">Total expenses this month</p>
        </CardContent>
      </Card>

      {/* Add Expense Button */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Expense Records</h3>
        <Button 
          onClick={() => {
            setShowForm(!showForm);
            setEditingExpense(null);
            form.reset();
          }}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Expense
        </Button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingExpense ? "Edit Expense" : "Add New Expense"}</CardTitle>
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
                          <Input placeholder="Enter expense description" {...field} required />
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
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter category" {...field} required />
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
                            <option value="Equipment">Equipment</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Salaries">Salaries</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="Travel">Travel</option>
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
                    {editingExpense ? "Update Expense" : "Add Expense"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      setShowForm(false);
                      setEditingExpense(null);
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

      {/* Expenses List */}
      <div className="grid gap-4">
        {expenses.map((expense) => (
          <Card key={expense.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold">{expense.description}</h4>
                  <p className="text-sm text-muted-foreground">{expense.category}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {expense.type}
                    </span>
                    <span className="text-muted-foreground">{expense.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-red-600">
                    ${expense.amount.toLocaleString()}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(expense)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(expense.id)}
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
