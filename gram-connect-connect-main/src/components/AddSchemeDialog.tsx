import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface AddSchemeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddScheme: (scheme: any) => void;
}

export const AddSchemeDialog = ({ open, onOpenChange, onAddScheme }: AddSchemeDialogProps) => {
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    benefit: string;
    category: string;
    eligibilityStatus: 'eligible' | 'partially-eligible' | 'not-eligible';
    eligibilityReasons: string[];
    imageUrl: string;
  }>({
    title: '',
    description: '',
    benefit: '',
    category: '',
    eligibilityStatus: 'eligible',
    eligibilityReasons: [''],
    imageUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.category) return;
    
    onAddScheme({
      ...formData,
      eligibilityReasons: formData.eligibilityReasons.filter(reason => reason.trim() !== '')
    });
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      benefit: '',
      category: '',
      eligibilityStatus: 'eligible',
      eligibilityReasons: [''],
      imageUrl: ''
    });
  };

  const handleReasonChange = (index: number, value: string) => {
    const newReasons = [...formData.eligibilityReasons];
    newReasons[index] = value;
    setFormData({ ...formData, eligibilityReasons: newReasons });
  };

  const addReason = () => {
    setFormData({ 
      ...formData, 
      eligibilityReasons: [...formData.eligibilityReasons, ''] 
    });
  };

  const removeReason = (index: number) => {
    const newReasons = formData.eligibilityReasons.filter((_, i) => i !== index);
    setFormData({ ...formData, eligibilityReasons: newReasons });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Scheme</DialogTitle>
          <DialogDescription>
            Create a new government scheme. Fill in the details below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Scheme Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter scheme title"
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter scheme description"
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="benefit">Benefits</Label>
              <Input
                id="benefit"
                value={formData.benefit}
                onChange={(e) => setFormData({ ...formData, benefit: e.target.value })}
                placeholder="e.g., ₹2000/month"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Agriculture">Agriculture</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Health">Health</SelectItem>
                  <SelectItem value="Employment">Employment</SelectItem>
                  <SelectItem value="Housing">Housing</SelectItem>
                  <SelectItem value="Social Welfare">Social Welfare</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="eligibility-status">Eligibility Status</Label>
              <Select 
                value={formData.eligibilityStatus} 
                onValueChange={(value) => 
                  setFormData({ ...formData, eligibilityStatus: value as 'eligible' | 'partially-eligible' | 'not-eligible' })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eligible">Eligible</SelectItem>
                  <SelectItem value="partially-eligible">Partially Eligible</SelectItem>
                  <SelectItem value="not-eligible">Not Eligible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label>Eligibility Requirements</Label>
              {formData.eligibilityReasons.map((reason, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={reason}
                    onChange={(e) => handleReasonChange(index, e.target.value)}
                    placeholder="Enter eligibility requirement"
                  />
                  {formData.eligibilityReasons.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeReason(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addReason}
                className="w-fit"
              >
                Add Requirement
              </Button>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="image">Image URL (optional)</Label>
              <Input
                id="image"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                placeholder="Enter image URL"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Scheme</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};