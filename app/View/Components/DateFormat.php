<?php

namespace App\View\Components;

use Illuminate\View\Component;

class DateFormat extends Component
{
    public $date;
    public $value;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($date)
    {
        $this->date=$date;
        $this->value=$date;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.date-format');
    }
}
