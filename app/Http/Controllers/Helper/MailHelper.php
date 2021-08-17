<?php

namespace App\Http\Controllers\Helper;

use App\Http\Controllers\Controller;

use App\Datas\MailData;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MailHelper extends Mailable
{
    use Queueable, SerializesModels;

    public $mailData;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(MailData $mailData)
    {
        $this->mailData = $mailData;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $param=array();
        foreach($this->mailData as $key=>$val)$param[$key]=$val;
        return $this
            ->view($this->mailData->template)
            ->subject($this->mailData->subject)
            ->with($param);
    }
}
