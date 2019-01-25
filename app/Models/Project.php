<?php

namespace App\Models;

use App\Models\Task;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'description'];

    public function scopeIncomplete($query)
    {
        return $query->where('is_completed', false);
    }

    public function scopeIncludingTaskCount($query)
    {
        return $query->withCount(['tasks' => function($tasksQuery) {
            $tasksQuery->incomplete();
        }]);
    }

    public function scopeInDescendingOrder($query)
    {
        return $query->orderBy('created_at', 'desc');
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
