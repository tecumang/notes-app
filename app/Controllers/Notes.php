<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use App\Models\NoteModel;

class Notes extends ResourceController
{
    protected $modelName = NoteModel::class;
    protected $format = 'json';

    public function index()
    {
        return $this->respond($this->model->findAll());
    }

    public function create()
    {

        $data = $this->request->getJSON(true);
        if (!$data) {
            return $this->failValidationError('Invalid JSON');
        }

        $this->model->insert($data);
        return $this->respondCreated($data);
    }

    public function update($id = null)
    {
        $data = $this->request->getJSON(true);
        if (!$data) {
            return $this->failValidationError('Invalid JSON');
        }

        $this->model->update($id, $data);
        return $this->respond(['status' => 'updated']);
    }

    public function delete($id = null)
    {
        $this->model->delete($id);
        return $this->respondDeleted(['status' => 'deleted']);
    }
}
